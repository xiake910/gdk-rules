# GDK规则

个人自用的 GKD 规则订阅，由多个公开订阅**去重合并**而来，只保留不重复的部分。

- 订阅名：**GDK规则**
- 订阅 ID：`2026111101`
- 作者：`xiake910`
- 仓库：<https://github.com/xiake910/gdk->
- 当前版本：**v7**
- 规模：**1056 个 App / 3508 个规则组 / 5432 条规则 / 11 个分类 / 3 个全局规则组**
- 来源与授权详见 [SOURCES.md](SOURCES.md)

## 订阅地址（GKD 里粘贴一个）

- 国内镜像（推荐）：
  `https://fastly.jsdelivr.net/gh/xiake910/gdk-@main/dist/gkd.json5`
- 直连：
  `https://raw.githubusercontent.com/xiake910/gdk-/main/dist/gkd.json5`

## 规则来源（详见 SOURCES.md）

| 来源 | 版本 | 许可证 | 取用 |
|---|---|---|---|
| id667 的 GKD 订阅（镜像 gkd667.vv.ax） | v631 | 未声明 | 主体规则 |
| AIsouler 的 GKD 订阅 | v406（已停更） | 未声明 | **仅 72 个不重复的组** |
| 甘霖的 GKD 订阅（ganlinte/GKD-subscription） | v72 | **MIT** | **53 个新 App + 926 个不重复的组** |
| 本项目自写 | — | — | 红果短剧 / B站 的补充规则 |

> ⚠️ 667 与 AIsouler 未声明许可证，本项目仅作个人自用/离线备份，请勿公开分发或商用；甘霖订阅为 MIT，保留其署名。

## 目录结构

```
src/
  subscription.ts   订阅详情（名称 GDK规则 / id / 作者 / 链接）
  apps/             各 App 规则（自动生成，1056 个文件）
  categories.ts     规则分类（11 个）
  globalGroups.ts   全局规则组（3 个）
scripts/            构建/校验脚本
dist/               构建产物（gkd.json5 ≈ 1.8MB、版本文件、CHANGELOG、README）
.github/workflows/  GitHub Actions（构建发布、提交检查）
SOURCES.md          各来源的版本、许可证、取用范围
```

## 本地构建

需要 **Node.js ≥ 22** 和 **pnpm ≥ 9**：

```bash
pnpm install
pnpm run build     # tsc 类型检查 + 选择器/正则校验 + 生成 dist/
```

- 1000+ 文件，`tsc` 会跑 1-3 分钟，属正常
- 国内装依赖慢：`pnpm install --registry=https://registry.npmmirror.com`

## 说明

- 订阅的 `id` 全局唯一（`2026111101`），不会和上游订阅冲突
- 组 `key` 一旦发布不要改，否则 GKD 里的启用状态会错乱
- 合并结果**不会自动跟随上游更新**，上游更新后需重新做一次「下载 → 去重合并 → 构建 → 提交」
- 本项目只含规则，不含 GKD App 本体：[gkd-kit/gkd](https://github.com/gkd-kit/gkd)
