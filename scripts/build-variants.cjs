// 生成额外订阅变体（在 pnpm run build 之后运行）
//   dist/gkd.json5       精简版（默认策略，来自 src）：广告类全开
//   dist/gkd-full.json5  全量版：所有规则组全开
//   dist/gkd-min.json5   极简版：只开「开屏广告 + 全屏广告（弹窗）」
const fs = require('node:fs');
const path = require('node:path');
const json5 = require('json5');

const distDir = path.resolve('dist');
const base = json5.parse(fs.readFileSync(path.join(distDir, 'gkd.json5'), 'utf8'));

const FULL_ID = 2026111102;
const MIN_ID = 2026111103;

const clone = () => JSON.parse(JSON.stringify(base));

// ---------- 全量版 ----------
const full = clone();
full.id = FULL_ID;
full.name = 'GDK规则（全量启用）';
for (const app of full.apps ?? []) for (const g of app.groups ?? []) g.enable = true;
for (const g of full.globalGroups ?? []) g.enable = true;
for (const c of full.categories ?? []) c.enable = true;
fs.writeFileSync(path.join(distDir, 'gkd-full.json5'), JSON.stringify(full));
fs.writeFileSync(path.join(distDir, 'gkd-full.version.json5'), `{id:${FULL_ID},version:${full.version}}`);

// ---------- 极简版 ----------
const MIN_PREFIXES = ['开屏广告', '全屏广告'];
const isMin = (name) => MIN_PREFIXES.some((p) => String(name || '').startsWith(p));

const min = clone();
min.id = MIN_ID;
min.name = 'GDK规则（极简：仅开屏+弹窗广告）';
let minOn = 0;
for (const app of min.apps ?? []) {
  for (const g of app.groups ?? []) {
    const on = isMin(g.name);
    g.enable = on;
    if (on) minOn++;
  }
}
for (const g of min.globalGroups ?? []) g.enable = false;
for (const c of min.categories ?? []) c.enable = isMin(c.name);
fs.writeFileSync(path.join(distDir, 'gkd-min.json5'), JSON.stringify(min));
fs.writeFileSync(path.join(distDir, 'gkd-min.version.json5'), `{id:${MIN_ID},version:${min.version}}`);

// ---------- 统计 ----------
const stat = (o) => {
  let on = 0, total = 0;
  const by = {};
  for (const a of o.apps ?? []) for (const g of a.groups ?? []) {
    total++;
    if (g.enable !== false) { on++; const k = (g.name || '').split('-')[0]; by[k] = (by[k] || 0) + 1; }
  }
  return { version: o.version, groups: total, enabled: on, by };
};

console.log(JSON.stringify({
  min: { file: 'dist/gkd-min.json5', id: MIN_ID, ...stat(min) },
  default: { file: 'dist/gkd.json5', id: base.id, ...stat(base) },
  full: { file: 'dist/gkd-full.json5', id: FULL_ID, ...stat(full) },
}, null, 2));
