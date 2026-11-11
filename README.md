# GDK 订阅规则

合并多个公开订阅（去重）的 GKD 订阅：**1056 个 App / 3508 个规则组 / 5432 条规则**。
提供两个版本，二选一。变更记录见 [CHANGELOG.md](CHANGELOG.md)。

## 两个版本（选一个加）

| 版本 | 订阅地址 | 默认开启的内容 |
|---|---|---|
| **精简版**（推荐） | `https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@v10/dist/gkd.json5` | **广告类全部开启 = 2145 组**：开屏 222、全屏弹窗 1145、局部 620、分段 158；其余 1363 组默认关闭 |
| **全量版** | `https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@v10/dist/gkd-full.json5` | **3508 组全部开启** + 3 个全局规则组（等同旧 V8 行为） |

### 精简版默认开着 / 默认关着

| 默认**开**（去广告） | 组数 | 默认**关**（自选） | 组数 |
|---|---|---|---|
| 开屏广告 | 222 | 功能类（自动领取/关注/点赞等） | 551 |
| 全屏广告（弹窗） | 1145 | 更新提示 | 287 |
| 局部广告 | 620 | 权限提示 | 255 |
| 分段广告 | 158 | 通知提示 | 81 |
| | | 评价提示 | 73 |
| | | 青少年模式 | 42 |
| | | 其他 | 74 |
| | | 全局规则组 | 3 |

> 想再省电/更保守：GKD → 订阅 → 展开「分类」→ 关掉「局部广告 / 分段广告」等。
> 想要功能类：同样在分类里单独打开。

## 订阅地址说明

**用 `@v10` 标签地址，不要用 `@main`。** jsDelivr 的 `@main` 有最长 12 小时的分支缓存，
曾出现「地址没变但内容仍是旧版」的问题；标签地址固定、立即生效。以后新版本会发 `@v11`…

备用镜像（换域名，路径不变）：

```
https://gcore.jsdelivr.net/gh/xiake910/gdk-rules@v10/dist/gkd.json5
https://testingcf.jsdelivr.net/gh/xiake910/gdk-rules@v10/dist/gkd-full.json5
https://raw.githubusercontent.com/xiake910/gdk-rules/v10/dist/gkd.json5
```

## 注意

- 两个版本订阅 id 不同（`2026111101` / `2026111102`），**不要同时添加**。
- 之前加过旧地址的，请**删除订阅后重新添加**（GKD 会保留旧的启用状态）。

## 来源与授权

规则来自 id667（v631，未声明许可）、AIsouler（v406，未声明许可，已停更）、甘霖（v72，MIT）以及本项目自写；
取用范围、跳过数量见 [SOURCES.md](SOURCES.md)。未授权部分**仅个人自用，请勿公开分发或商用**。

## 本地构建

```bash
pnpm install
pnpm run build   # 生成 dist/gkd.json5(精简) + dist/gkd-full.json5(全量)
```
