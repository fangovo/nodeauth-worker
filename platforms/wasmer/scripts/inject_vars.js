/**
 * NodeAuth Variable Injection Script
 * Purpose: Replaces placeholders like __DIST_COMMIT_HASH__ with actual values during deployment.
 * Used by wrangler.toml [build] hook or manually during CI/CD.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getCommitHash() {
    try {
        return execSync('git rev-parse --short HEAD').toString().trim();
    } catch (e) {
        return process.env.GITHUB_SHA ? process.env.GITHUB_SHA.substring(0, 7) : 'unknown';
    }
}

/**
 * Platform Detection Logic (Embedded for standalone distribution compatibility)
 */
const PLATFORM_REGISTRY = [
    { name: 'Koyeb', suffix: 'koyeb', match: (env) => env.KOYEB_APP_NAME || env.KOYEB_SERVICE_NAME },
    { name: 'Northflank', suffix: 'northflank', match: (env) => env.NF_HOSTS || env.NF_GIT_SHA },
    { name: 'Netlify', suffix: 'netlify', match: (env) => env.NETLIFY || env.NETLIFY_SITE_ID },
    { name: 'Vercel', suffix: 'vercel', match: (env) => env.VERCEL || env.VERCEL_PROJECT_ID },
    { name: 'EdgeOne Pages', suffix: 'edgeone', match: (env) => env.EDGEONE_PAGES_PROJECT_NAME },
    { name: 'Aliyun ESA', suffix: 'esa', match: (env) => env.ALIYUN_ESA },
    { name: 'Deno Deploy', suffix: 'deno', match: (env) => env.DENO_DEPLOYMENT_ID || env.DENO_REGION },
    { name: 'Wasmer Edge', suffix: 'wasmer', match: (env) => env.WASMER_TOKEN },
    { name: 'Prisma Compute', suffix: 'prisma', match: (env) => env.PRISMA_SERVICE_TOKEN || env.PRISMA_APP_NAME },
    { name: 'Docker', suffix: 'docker', match: (env) => env.DOCKER_BUILD || env.KUBERNETES_SERVICE_HOST },
    { name: 'Cloudflare Workers', suffix: 'cloudflare', match: () => true }, // Fallback
];

function detectPlatform(env = process.env) {
    const explicit = PLATFORM_REGISTRY.find(p => p.suffix === env.DEPLOY_PLATFORM);
    if (explicit) return explicit;

    return PLATFORM_REGISTRY.find(p => p.match(env));
}

// Support --platform=<suffix> CLI arg as an override
const platformArg = process.argv.find(arg => arg.startsWith('--platform='));
if (platformArg) {
    process.env.DEPLOY_PLATFORM = platformArg.split('=')[1];
}

const commitHash = getCommitHash();
const platform = detectPlatform();

const injectCommitOnly = process.argv.includes('--inject-commit-only');
const injectPlatformOnly = process.argv.includes('--inject-platform-only');

console.log(`💉 Injecting variables:`);
if (!injectPlatformOnly) console.log(`   - Commit: ${commitHash}`);
if (!injectCommitOnly) {
    console.log(`   - Platform: ${platform.name}`);
    console.log(`   - Icon Suffix: ${platform.suffix}`);
}

function replaceInDir(dir, replacements) {
    let entries;
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.warn(`⚠️ Directory access error (${dir}): ${err.message}`);
        }
        return;
    }

    entries.forEach(entry => {
        const entryName = entry.name;
        const filePath = path.join(dir, entryName);

        if (entry.isDirectory()) {
            replaceInDir(filePath, replacements);
        } else if (entry.isFile() && (
            entryName.endsWith('.js') ||
            entryName.endsWith('.mjs') ||
            entryName.endsWith('.html') ||
            entryName.endsWith('.json') ||
            entryName.endsWith('.webmanifest')
        )) {
            try {
                let content = fs.readFileSync(filePath, 'utf8');
                let modified = false;

                Object.entries(replacements).forEach(([pattern, value]) => {
                    if (content.includes(pattern)) {
                        content = content.split(pattern).join(value);
                        modified = true;
                    }
                });

                if (modified) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`   ✅ Injected: ${path.relative(process.cwd(), filePath)}`);
                }
            } catch (err) {
                console.error(`   ❌ Failed to process ${filePath}: ${err.message}`);
            }
        }
    });
}

// Define paths relative to the script location (assuming it's in scripts/)
const rootDir = path.resolve(__dirname, '..');
const searchPaths = [
    path.join(rootDir, 'frontend/dist'),
    path.join(rootDir, 'backend/dist'),
    path.join(rootDir, 'api'),
    path.join(rootDir, 'cloud-functions')
];

const replacements = {};
if (!injectPlatformOnly) {
    replacements['__DIST_COMMIT_HASH__'] = commitHash;
}
if (!injectCommitOnly) {
    replacements['__DIST_PLATFORM__'] = platform.name;
    replacements['__DIST_ICON_SUFFIX__'] = platform.suffix;
}

searchPaths.forEach(distPath => {
    console.log(`🔍 Scanning: ${path.relative(process.cwd(), distPath)}`);
    replaceInDir(distPath, replacements);
});

if (platform.suffix === 'esa') {
    const safeEnv = {};
    for (const key of Object.keys(process.env)) {
        if (key.match(/^(OAUTH_|DB_|DATABASE_|JWT_|ENCRYPTION_|NODEAUTH_|CRON_|D1_)/)) {
            safeEnv[key] = process.env[key];
        }
    }

    const esaEntryPath = path.join(rootDir, 'backend/dist/esa/index.js');
    try {
        const originalContent = fs.readFileSync(esaEntryPath, 'utf8');
        const injectedContent = `globalThis.process = { env: ${JSON.stringify(safeEnv)} };\n` + originalContent;
        fs.writeFileSync(esaEntryPath, injectedContent, 'utf8');
        console.log(`   💉 Injected ESA runtime environment variables into backend/dist/esa/index.js`);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.warn(`⚠️ Failed to inject ESA variables into ${esaEntryPath}: ${err.message}`);
        }
    }
}

console.log('✨ All variables injected successfully.');