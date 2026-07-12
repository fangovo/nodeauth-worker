const fs = require('fs');

// 获取配置文件路径，默认为 deno.json
const configPath = process.env.CONFIG_FILE || 'deno.json';

try {
    // 1. 读取并解析原始 JSON 文件
    const jsonString = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(jsonString);

    console.log(`Updating ${configPath}...`);

    // 确保 deploy 对象存在
    if (!config.deploy) {
        config.deploy = {};
    }

    // 2. 注入 Project 名字
    if (process.env.DENO_PROJECT) {
        config.deploy.project = process.env.DENO_PROJECT;
        console.log(`- Updated deploy.project to: ${config.deploy.project}`);
    }

    // 3. 注入 Org 名字
    if (process.env.DENO_ORG) {
        config.deploy.org = process.env.DENO_ORG;
        console.log(`- Updated deploy.org to: ${config.deploy.org}`);
    }

    // 4. 将修改后的对象序列化回 JSON 格式并写入文件
    const newJsonString = JSON.stringify(config, null, 2) + '\n';
    fs.writeFileSync(configPath, newJsonString);
    console.log(`✅ Successfully saved changes to ${configPath}`);

} catch (error) {
    console.error(`❌ Failed to parse or write JSON file:`, error.message);
    process.exit(1); // 抛出错误并中断工作流
}
