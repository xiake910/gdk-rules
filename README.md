# GDK 订阅规则

合并多个公开订阅（去重）的 GKD 订阅：**1056 个 App / 3508 个规则组 / 5432 条规则**。
提供两个版本，二选一即可。

## 两个版本（选一个加）

| 版本 | 订阅地址 | 默认开启的内容 |
|---|---|---|
| **精简版**（推荐） | `https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@main/dist/gkd.json5` | 只开「开屏广告」类 **222 组**；其余 3286 组（更新/评价/通知/权限提示、各类广告、功能类、全局规则）**默认关闭** |
| **全量版**（旧版 V8 同款） | `https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@main/dist/gkd-full.json5` | **全部开启**：3508 组 + 3 个全局规则组 |

> - 两个版本订阅 id 不同（`2026111101` / `2026111102`），但**不要同时添加**，否则规则重复。
> - 用法：GKD → 订阅 → `+` → 粘贴地址。
> - 精简版想用某个分类：GKD 里展开分类，自己打开。

## 来源与授权

规则来自 id667（v631，未声明许可）、AIsouler（v406，未声明许可，已停更）、甘霖（v72，MIT）以及本项目自写；
取用范围、跳过数量见 [SOURCES.md](SOURCES.md)。未授权部分**仅个人自用，请勿公开分发或商用**。

## 本地构建

```bash
pnpm install
pnpm run build   # 生成 dist/gkd.json5(精简) + dist/gkd-full.json5(全量)
```
