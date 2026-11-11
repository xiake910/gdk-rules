// 生成第二个订阅变体: 「全量启用版」(等同 V8 的策略: 所有规则组默认开启)
// 默认版 dist/gkd.json5: 只开「开屏广告」(v9 起的策略)
// 运行: node scripts/build-variants.cjs   (在 pnpm run build 之后)
const fs = require('node:fs');
const path = require('node:path');
const json5 = require('json5');

const distDir = path.resolve('dist');
const baseFile = path.join(distDir, 'gkd.json5');
const base = json5.parse(fs.readFileSync(baseFile, 'utf8'));

const FULL_ID = 2026111102;

const full = JSON.parse(JSON.stringify(base));
full.id = FULL_ID;
full.name = 'GDK规则（全量启用）';
for (const app of full.apps ?? []) {
  for (const g of app.groups ?? []) g.enable = true;
}
for (const g of full.globalGroups ?? []) g.enable = true;
for (const c of full.categories ?? []) c.enable = true;

fs.writeFileSync(path.join(distDir, 'gkd-full.json5'), JSON.stringify(full));
fs.writeFileSync(
  path.join(distDir, 'gkd-full.version.json5'),
  `{id:${FULL_ID},version:${full.version}}`,
);

let groups = 0;
for (const a of base.apps ?? []) groups += (a.groups ?? []).length;
let on = 0;
for (const a of base.apps ?? []) for (const g of a.groups ?? []) if (g.enable !== false) on++;

console.log(JSON.stringify({
  default: { file: 'dist/gkd.json5', id: base.id, name: base.name, version: base.version, groups, enabledByDefault: on },
  full: { file: 'dist/gkd-full.json5', id: FULL_ID, name: full.name, version: full.version, groups, enabledByDefault: groups, globalGroupsEnabled: (full.globalGroups ?? []).length },
}, null, 2));
