# GDK 订阅规则

合并多个公开订阅（去重）的 GKD 订阅：**1056 个 App / 3508 个规则组 / 5432 条规则**。
提供两个版本，二选一。

## 两个版本（选一个加）

| 版本 | 订阅地址（**用 v9 标签地址**） | 默认开启的内容 |
|---|---|---|
| **精简版**（推荐） | `https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@v9/dist/gkd.json5` | 只开「开屏广告」类 **222 组**；其余 3286 组默认关闭 |
| **全量版**（旧 V8 同款） | `https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@v9/dist/gkd-full.json5` | **3508 组全部开启** + 3 个全局规则组 |

备用镜像（fastly 打不开时换域名，路径不变）：

```
https://gcore.jsdelivr.net/gh/xiake910/gdk-rules@v9/dist/gkd.json5
https://testingcf.jsdelivr.net/gh/xiake910/gdk-rules@v9/dist/gkd.json5
https://raw.githubusercontent.com/xiake910/gdk-rules/v9/dist/gkd.json5
```

> **为什么用 `@v9` 而不是 `@main`**：jsDelivr 对 `@main` 有最长 12 小时的分支缓存，
> 出现过「地址没变但内容还是旧版」的情况。`@v9` 是固定标签，内容稳定、立即生效。
> 以后更新版本会发新标签（`@v10`…），README 会同步改。

## 注意

- 两个版本订阅 id 不同（`2026111101` / `2026111102`），**不要同时添加**。
- 精简版想用某个分类：GKD → 展开分类 → 自己打开。
- 如果之前加过旧地址，请**删除订阅后重新添加**，GKD 会保留旧的启用状态。

## 来源与授权

规则来自 id667（v631，未声明许可）、AIsouler（v406，未声明许可，已停更）、甘霖（v72，MIT）以及本项目自写；
取用范围、跳过数量见 [SOURCES.md](SOURCES.md)。未授权部分**仅个人自用，请勿公开分发或商用**。

## 本地构建

```bash
pnpm install
pnpm run build   # 生成 dist/gkd.json5(精简) + dist/gkd-full.json5(全量)
```
