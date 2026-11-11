# 我的 GKD 订阅

基于 [gkd-kit/subscription-template](https://github.com/gkd-kit/subscription-template) 搭建的个人 GKD 规则订阅。

- 订阅 ID：`2026111101`
- 作者：`xiake910`
- 仓库：`https://github.com/xiake910/gdk-`
- 当前版本：**v5**
- 规则规模：**1003 个 App / 2510 个规则组 / 3962 条规则 / 11 个分类 / 3 个全局规则组**

## 订阅地址（GKD 里粘贴一个即可）

- 直连：
  `https://raw.githubusercontent.com/xiake910/gdk-/main/dist/gkd.json5`
- 国内镜像（推荐，raw 不通时用它）：
  `https://fastly.jsdelivr.net/gh/xiake910/gdk-@main/dist/gkd.json5`

## 规则来源与授权 ⚠️

- `src/apps/` 下绝大部分规则来自第三方订阅 **id667 的 GKD 订阅**（v631，镜像 `https://gkd667.vv.ax/gkd.json5`，
  上游仓库 [Lin-arm/GKD_subscription](https://github.com/Lin-arm/GKD_subscription)），是原样导入的。
- 那个订阅**没有声明开源许可证**，作者保留权利；这里仅作**个人自用/备份**，不是原创，请勿当作自有规则再分发或商用。
  如果上游作者提出异议，请删除本仓库对应规则。
- 上游 `author` 字段写着「源即将停用，建议更换」，所以这里等于做了一份离线快照；**以后上游更新不会自动同步**，
  需要重新导入（见下面「重新导入上游规则」）。
- 本项目自己写的规则（红果、B站的开屏/更新/通知权限等）保留了不同名的组；与上游同名的组以**上游版本**为准。

## 目录结构

```
src/
  subscription.ts   订阅详情（id / 名称 / 作者 / 链接）
  apps/             规则（大部分为自动生成，来自 id667 订阅；少量为本项目手写）
  categories.ts     规则分类（本项目 4 个 + 上游 7 个）
  globalGroups.ts   全局规则组（3 个，来自上游）
scripts/            构建/校验脚本
dist/               构建产物（gkd.json5 ≈ 1.38MB、版本文件、CHANGELOG、README）
.github/workflows/  GitHub Actions（构建发布、提交检查）
```

## 本地构建

需要 **Node.js ≥ 22** 和 **pnpm ≥ 9**：

```bash
pnpm install
pnpm run build     # tsc 类型检查 + 选择器/正则校验 + 生成 dist/
```

国内装依赖慢时：`pnpm install --registry=https://registry.npmmirror.com`

构建会做这些事：
- `tsc --noEmit` 类型检查（现在有 1000+ 文件，会慢一些）
- 用 Node 22+ 的 WasmGc 校验选择器里的 Java/Kotlin 正则
- 合并 `src/` → `dist/gkd.json5`，版本号自动 +1，更新 `CHANGELOG.md`

## 重新导入上游规则（上游更新后）

1. 下载最新 `gkd.json5`（例如 `https://gkd667.vv.ax/gkd.json5`）
2. 用 `scripts/gen-merge.ts`（需要时可重新生成该脚本）重新生成 `src/apps/`、`src/categories.ts`、`src/globalGroups.ts`
3. `pnpm run build`
4. 提交 `src/` 和 `dist/`

## 改规则/加规则

- 想改某条：直接编辑 `src/apps/<包名>.ts`（自动生成的文件顶部有注释，改完记得下次重新导入会被覆盖）
- 想加自己的：新建 `src/apps/<包名>.ts`，用 `defineGkdApp` 写
- 常用字段看 [gkd.li/api](https://gkd.li/api)，选择器语法看 [gkd.li/guide/selector](https://gkd.li/guide/selector)
- 调试：GKD 里用「快照/审查工具」抓界面节点

## 注意

- `src/subscription.ts` 的 `id` 必须全局唯一（当前 `2026111101`），不要和别人的订阅撞车
- `key` 一旦发布就不要改，否则 GKD 里的启用状态会错乱
- 订阅变大后 GKD 加载/匹配会稍慢（1.38MB，和上游一样），属正常
- 本项目只含规则，不含 GKD App 本体：[gkd-kit/gkd](https://github.com/gkd-kit/gkd)
