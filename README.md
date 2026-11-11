# GDK 订阅规则

合并多个公开订阅（去重）的 GKD 订阅：**1056 个 App / 3508 个规则组 / 5432 条规则**。

📄 更新日志：[CHANGELOG.md](CHANGELOG.md) ｜ 来源授权：[SOURCES.md](SOURCES.md)

## 订阅地址（选一个）

**精简版**（推荐，只去广告）
`https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@v10/dist/gkd.json5`

**全量版**（所有规则全开）
`https://fastly.jsdelivr.net/gh/xiake910/gdk-rules@v10/dist/gkd-full.json5`

> 用 `@v10` 而不用 `@main`：jsDelivr 对 `@main` 有最长 12 小时缓存，会出现地址没变但内容还是旧版。

<details>
<summary>备用镜像（fastly 打不开时）</summary>

把域名 `fastly` 换成 `gcore` 或 `testingcf` 即可，路径不变。

```
https://gcore.jsdelivr.net/gh/xiake910/gdk-rules@v10/dist/gkd.json5
https://testingcf.jsdelivr.net/gh/xiake910/gdk-rules@v10/dist/gkd.json5
https://raw.githubusercontent.com/xiake910/gdk-rules/v10/dist/gkd.json5
```

</details>

## 精简版默认开什么

| 默认开（去广告） | 组数 | 默认关（自选） | 组数 |
|---|---|---|---|
| 开屏广告 | 222 | 功能类 | 551 |
| 全屏广告（弹窗） | 1145 | 更新提示 | 287 |
| 局部广告 | 620 | 权限提示 | 255 |
| 分段广告 | 158 | 通知提示 / 评价提示 / 青少年模式 / 其他 | 81 / 73 / 42 / 74 |
| **合计** | **2145** | 全局规则组 | 3 |

想更保守或想用功能类：GKD → 订阅 → 展开「分类」→ 自己开关。

## 注意

- 两个版本订阅 id 不同，**不要同时添加**。
- 之前加过旧地址的，请**删除订阅后重新添加**（否则 GKD 保留旧的启用状态）。

## 本地构建

```bash
pnpm install
pnpm run build   # 生成 dist/gkd.json5(精简) + dist/gkd-full.json5(全量)
```
