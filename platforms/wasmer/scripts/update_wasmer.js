const fs = require('fs');

// 默认需要处理的所有 Wasmer 配置文件（相对于运行脚本的当前目录，通常是 platforms/wasmer）
const defaultFiles = [
    'app.yaml',
    'wasmer.toml',
    'package.json'
];

// 解析命令行参数，例如 --configfile=package.json (忽略大小写)
const args = process.argv.slice(2);
let argConfigFile = null;
for (const arg of args) {
    if (arg.toLowerCase().startsWith('--configfile=')) {
        argConfigFile = arg.split('=')[1];
    }
}

// 允许通过命令行参数或环境变量指定单个文件，否则使用默认列表
const configFiles = argConfigFile ? [argConfigFile] : (process.env.CONFIG_FILE ? [process.env.CONFIG_FILE] : defaultFiles);

const appName = process.env.WASMER_APP_NAME;
const owner = process.env.WASMER_OWNER;

let successCount = 0;

for (const configPath of configFiles) {
    let content;
    try {
        content = fs.readFileSync(configPath, 'utf-8');
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.warn(`⚠️ Skipped ${configPath} (File not found)`);
            continue;
        }
        console.error(`❌ Failed to read config file ${configPath}:`, err.message);
        process.exit(1);
    }

    try {
        const isYaml = configPath.endsWith('.yaml');
        const isToml = configPath.endsWith('.toml');
        const isJson = configPath.endsWith('.json');

        console.log(`Updating ${configPath}...`);
        let modified = false;

        if (isYaml) {
            if (appName && content.match(/^name:\s*.+$/m)) {
                content = content.replace(/^name:\s*.+$/m, `name: ${appName}`);
                console.log(`- Updated app.yaml name to: ${appName}`);
                modified = true;
            }
            if (owner && content.match(/^owner:\s*.+$/m)) {
                content = content.replace(/^owner:\s*.+$/m, `owner: ${owner}`);
                console.log(`- Updated app.yaml owner to: ${owner}`);
                modified = true;
            }

            // 关键：分发后必须删除绑定的 app_id，以便在新团队的 Wasmer 中重新创建
            if (content.match(/^app_id:/m)) {
                content = content.replace(/^app_id:\s*.*[\r\n]*/m, '');
                console.log(`- Removed hardcoded app_id from app.yaml`);
                modified = true;
            }
        } else if (isToml) {
            if ((appName || owner) && content.match(/^name\s*=\s*"([^/]+)\/([^"]+)"/m)) {
                content = content.replace(/^name\s*=\s*"([^/]+)\/([^"]+)"/m, (match, currentOwner, currentName) => {
                    const newOwner = owner || currentOwner;
                    const newName = appName || currentName;
                    return `name = "${newOwner}/${newName}"`;
                });
                console.log(`- Updated wasmer.toml package name`);
                modified = true;
            }
        } else if (isJson) {
            // 解析 JSON，强制注入 Node.js 运行时所需的入口参数
            let pkg = JSON.parse(content);
            pkg.main = "backend/dist/wasmer/wasmer.js";
            delete pkg.type; // 移除 type: module 以适应 EdgeJS 的 CJS 支持
            if (!pkg.scripts) pkg.scripts = {};
            pkg.scripts.start = "node backend/dist/wasmer/wasmer.js";
            pkg.scripts.build = "node scripts/inject_vars.js --platform=wasmer"; // 防止 wasmer deploy 时误触发 build

            content = JSON.stringify(pkg, null, 2);
            console.log(`- Updated package.json for Wasmer Node.js runtime`);
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(configPath, content);
            console.log(`✅ Successfully saved changes to ${configPath}`);
            successCount++;
        } else {
            console.log(`ℹ️ No changes needed for ${configPath}`);
        }

    } catch (error) {
        console.error(`❌ Failed to parse or write config file ${configPath}:`, error.message);
        process.exit(1);
    }
}

console.log(`\n🎉 Wasmer config update completed! (Updated ${successCount} files)`);
