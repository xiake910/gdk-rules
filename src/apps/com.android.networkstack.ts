// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.networkstack",
  "name": "网络管理器",
  "groups": [
    {
      "key": 1,
      "name": "功能类-VIOV-取消关闭私人DNS",
      "desc": "无法连接网络关闭DNS? ->取消",
      "forcedTime": 6000,
      "fastQuery": true,
      "activityIds": "org.telegram.ui.LaunchActivity",
      "rules": [
        {
          "matches": "[text=\"关闭私人 DNS\"] + [text=\"取消\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/29376048",
          "exampleUrls": "https://e.gkd.li/f05c2fd6-264d-4134-bd47-9e3481a256ec"
        }
      ]
    }
  ]
} as any);
