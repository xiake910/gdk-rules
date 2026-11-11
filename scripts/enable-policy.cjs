// 一次性脚本: 设定默认启用策略
// 默认启用: 广告类规则组（开屏广告 / 全屏广告 / 局部广告 / 分段广告）
// 默认关闭: 功能类 / 更新提示 / 权限提示 / 通知提示 / 评价提示 / 青少年模式 / 其他 / 全局规则组
const fs = require('node:fs');
const path = require('node:path');
const json5 = require('json5');

const ENABLE_PREFIXES = ['开屏广告', '全屏广告', '局部广告', '分段广告'];
const isAd = (name) =>
  ENABLE_PREFIXES.some((p) => String(name || '').startsWith(p));

const file = process.argv[2] || 'dist/gkd.json5';
const sub = json5.parse(fs.readFileSync(file, 'utf8'));

const apps = [];
let on = 0,
  off = 0;
for (const a of sub.apps ?? []) {
  const groups = (a.groups ?? []).map((g) => {
    const e = isAd(g.name);
    if (e) on++;
    else off++;
    return { ...g, enable: e };
  });
  apps.push({ id: a.id, name: a.name, groups });
}

const categories = (sub.categories ?? []).map((c) => ({
  ...c,
  enable: isAd(c.name),
}));
const globalGroups = (sub.globalGroups ?? []).map((g) => ({
  ...g,
  enable: false,
}));

const appsDir = path.resolve('src/apps');
for (const f of fs.readdirSync(appsDir)) fs.unlinkSync(path.join(appsDir, f));
const header =
  "// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）\nimport { defineGkdApp } from '@gkd-kit/define';\n\n";
for (const app of apps) {
  fs.writeFileSync(
    path.join(appsDir, `${app.id}.ts`),
    header +
      `export default defineGkdApp(${JSON.stringify(app, null, 2)} as any);\n`,
  );
}
fs.writeFileSync(
  path.resolve('src/categories.ts'),
  `// 自动生成, 请勿手改（分类默认值：广告类启用）\nimport { defineGkdCategories } from '@gkd-kit/define';\n\nexport default defineGkdCategories(${JSON.stringify(categories, null, 2)} as any);\n`,
);
fs.writeFileSync(
  path.resolve('src/globalGroups.ts'),
  `// 自动生成, 请勿手改（全局规则默认全部关闭）\nimport { defineGkdGlobalGroups } from '@gkd-kit/define';\n\nexport default defineGkdGlobalGroups(${JSON.stringify(globalGroups, null, 2)} as any);\n`,
);

console.log(
  JSON.stringify(
    {
      apps: apps.length,
      defaultOn: on,
      defaultOff: off,
      enabledPrefixes: ENABLE_PREFIXES,
      categories: categories.map((c) => `${c.name}:${c.enable}`),
    },
    null,
    2,
  ),
);
