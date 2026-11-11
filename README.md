# 我的 GKD 订阅

基于 [gkd-kit/subscription-template](https://github.com/gkd-kit/subscription-template) 搭建的个人 GKD 规则订阅。

- 订阅 ID：`2026111101`（随机大数字，避免和别人的订阅冲突）
- 作者：`xiake910`
- 仓库：`https://github.com/xiake910/gkd-subscription`
- 构建产物：`dist/gkd.json5`（GKD 里添加这个文件的地址即可）

## 目录结构

```
src/
  subscription.ts   订阅详情（id / 名称 / 作者 / 链接）
  globalGroups.ts   全局规则组（对所有 App 生效，默认留空）
  categories.ts     规则分类（按名字前缀捕获规则组）
  apps/             各 App 的规则，一个 App 一个文件
    com.example.demo.ts   示例规则（可删掉换成自己的）
    li.songe.gkd.ts       GKD 自身的空占位
scripts/            构建/校验脚本
dist/               构建产物（gkd.json5、版本文件、CHANGELOG、README）
.github/workflows/  GitHub Actions（构建发布、提交检查）
```

## 当前规则

| App | 规则组 | 默认 | 说明 |
|---|---|---|---|
| 红果免费短剧 `com.phoenix.read` | 开屏广告 | 开 | 启动 8 秒内点「跳过」，最多一次 |
| 红果免费短剧 | 更新提示 | 开 | 点「以后再说 / 暂不更新 / 稍后再说」 |
| 红果免费短剧 | 权限提示-通知权限 | 开 | 弹「开启通知」时点「取消 / 暂不开启」 |
| 红果免费短剧 | 功能类-[上滑]继续看短剧 | **关** | 刷到「上滑继续观看短剧」自动上滑 |
| 哔哩哔哩 `tv.danmaku.bili` | 开屏广告 | 开 | 启动 8 秒内点「跳过」 |
| 哔哩哔哩 | 更新提示 | 开 | 点「以后再说 / 暂不更新」 |

> 红果的「功能类」组默认关闭，需要时在 GKD → 订阅 → 本订阅里单独打开。
> B站只写了最不容易误触的两组，其他广告位要按真机快照加。

## 本地构建

需要 **Node.js ≥ 22**（工程按 26 写的，22 以上都行）和 **pnpm ≥ 9**：

```bash
pnpm install
pnpm run build     # 类型检查 + 生成 dist/
```

国内网络装依赖慢时：

```bash
pnpm install --registry=https://registry.npmmirror.com
```

构建会做这些事：
- `tsc --noEmit` 类型检查
- 用 Node 22+ 的 WasmGc 校验选择器里的 Java/Kotlin 正则是否合法
- 把 `src/` 合并成 `dist/gkd.json5`，版本号自动 +1，更新 `CHANGELOG.md`

## 发布到 GitHub（第一次）

1. 新建仓库 `gkd-subscription`（不要勾选自动生成 README）
2. 把这个目录里的**除 `node_modules` 以外**的所有文件传上去：
   - 网页版：仓库页 → Add file → Upload files，把 `src`、`dist`、`scripts`、`.github`、`package.json`、`pnpm-lock.yaml`、`pnpm-workspace.yaml`、`tsconfig.json`、`eslint.config.ts`、`prettier.config.ts`、`.gitignore`、`.prettierignore` 拖进去（拖文件夹会保留子目录结构）
   - 或者用 GitHub Desktop / git 命令行提交
3. 打开 **Settings → Actions → General → Workflow permissions**，选 **Read and write permissions** 并保存
   （构建成功后要自动 commit 回仓库，没有写权限会失败）
4. 打开 **Actions → build_release → Run workflow**，跑完 `dist/gkd.json5` 和版本号会自动更新并 commit

## 在 GKD 里添加订阅

- 官方地址（国内常打不开 raw）：
  `https://raw.githubusercontent.com/xiake910/gkd-subscription/main/dist/gkd.json5`
- jsDelivr 镜像（推荐国内用）：
  `https://fastly.jsdelivr.net/gh/xiake910/gkd-subscription@main/dist/gkd.json5`

GKD → 订阅 → 右上角 `+` → 粘贴上面的地址。

> 因为 `checkUpdateUrl` 用的是相对路径 `./gkd.version.json5`，GKD 会基于你填的订阅地址自动拼出更新检查地址，两个源都能正常检查更新。

## 加自己的规则

在 `src/apps/` 下新建 `<包名>.ts`，例如 `com.tencent.mm.ts`：

```ts
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',   // 包名
  name: '微信',            // 没装这个 App 时显示的名字
  groups: [
    {
      key: 1,             // 组内唯一，客户端靠它记住启用/禁用状态，定了就别改
      name: '开屏广告',     // 以分类名前缀开头，才会被 categories 捕获
      desc: '自动点跳过',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [{ matches: '[text*="跳过"]', action: 'clickCenter' }],
    },
  ],
});
```

常用字段看 [gkd.li/api](https://gkd.li/api)，选择器语法看 [gkd.li/guide/selector](https://gkd.li/guide/selector)。
调试规则最省事的办法：GKD 里开「快照/审查工具」抓界面节点，再用选择器试。

## 注意

- `src/subscription.ts` 里的 `id` **必须全局唯一**，换订阅时不要照抄别人的
- `key` 一旦发布就不要改，否则用户的启用状态会错乱
- 规则写错最多是点不到，但**全局规则**建议谨慎（默认留空就是这个原因）
- 本项目只写规则，不包含 GKD App 本体：App 在 [gkd-kit/gkd](https://github.com/gkd-kit/gkd) 下载
