# GDK 订阅规则

合并多个公开订阅（去重）的 GKD 订阅：**1056 个 App / 3509 个规则组 / 5432 条规则**。

> 🤖 **本项目由 AI 辅助制作。** 规则合并、去重、默认启用策略、文档与提交均由 AI（DeepSeek Harness）协助完成；
> 规则本体来自各上游订阅，**未逐条在真机上验证**，如有误触请自行在 GKD 里关闭对应规则组。

---

## ⚠️ 来源与授权（请先看）

本订阅**不是原创**，规则由以下公开订阅去重合并，**许可状态不一**：

- **id667** v631（[Lin-arm](https://github.com/Lin-arm/GKD_subscription) / 镜像 gkd667.vv.ax）— 主体 · 许可**未声明**
- **AIsouler** v406（已停更）— 仅 72 组 · 许可**未声明**
- **甘霖** v72 — 53 App + 926 组 · **MIT**
- 本项目补充（AI 辅助）— 红果 / B站 / 喜马拉雅

> 前两个来源**未声明开源许可**，版权属原作者：本项目**仅个人自用**，请勿公开分发或商用；原作者可要求删除对应内容。
> 详见 [SOURCES.md](SOURCES.md)。

---

## 订阅地址（选一个）

**精简版**（推荐，只去广告）
`https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@v11/dist/gkd.json5`

**全量版**（所有规则全开）
`https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@v11/dist/gkd-full.json5`

> 用 `@v11` 而不用 `@main`：jsDelivr 对 `@main` 有最长 12 小时缓存，会出现地址没变但内容还是旧版。

<details>
<summary>备用镜像（fastly 打不开时）</summary>

把域名 `fastly` 换成 `gcore` 或 `testingcf` 即可，路径不变。

```
https://gcore.jsdelivr.net/gh/xiake910/gdk-rules@v11/dist/gkd.json5
https://testingcf.jsdelivr.net/gh/xiake910/gdk-rules@v11/dist/gkd.json5
https://raw.githubusercontent.com/xiake910/gdk-rules/v11/dist/gkd.json5
```

</details>

## 精简版默认开什么

| 默认开（去广告） | 组数 | 默认关（自选） | 组数 |
|---|---|---|---|
| 开屏广告 | 222 | 功能类 | 551 |
| 全屏广告（弹窗） | 1145 | 更新提示 | 287 |
| 局部广告 | 621 | 权限提示 | 255 |
| 分段广告 | 158 | 通知提示 / 评价提示 / 青少年模式 / 其他 | 81 / 73 / 42 / 74 |
| **合计** | **2146** | 全局规则组 | 3 |

想更保守或想用功能类：GKD → 订阅 → 展开「分类」→ 自己开关。

## 本项目补充的规则

| App | 规则 | 说明 |
|---|---|---|
| 红果免费短剧 | 开屏广告 / 更新提示 / 通知权限 | 上游没有的部分 |
| 哔哩哔哩 | 开屏广告 / 更新提示 | 上游已有 34 组，这里只补通用两条 |
| 喜马拉雅 | 局部广告-评论区广告-补充 | v11 新增，补 key=8 只覆盖一个关闭控件的情况 |

## 注意

- 两个版本订阅 id 不同，**不要同时添加**。
- 之前加过旧地址的，请**删除订阅后重新添加**（否则 GKD 保留旧的启用状态）。
- 合并结果不会自动跟随上游更新，上游更新后需重新合并构建。

## 本地构建

```bash
pnpm install
pnpm run build   # 生成 dist/gkd.json5(精简) + dist/gkd-full.json5(全量)
```

---

## 更新日志

按重要节点分的四次大更新（2026-11-11）：

| 更新 | 内容 |
|---|---|
| **四次更新**（v10–v11） | 精简版默认改为**广告类全开 2146 组**，功能类/权限/更新提示等默认关；新增**喜马拉雅评论区广告**规则；加 AI 制作声明；改用版本标签地址 |
| **三次更新**（v8–v9） | 仓库更名 `gdk-rules`、订阅名「GDK规则」；提供**精简版 + 全量版**两个订阅；补 SOURCES.md |
| **二次更新**（v6–v7） | **规则大合并**：id667 全量 + AIsouler/甘霖去重导入 → 1056 App / 3508 组 / 5432 条 |
| **一次更新**（v1–v5） | 搭建工程、自写红果/B站规则、接入 GitHub Actions、首次发布 |

详细说明：[CHANGELOG.md](CHANGELOG.md)