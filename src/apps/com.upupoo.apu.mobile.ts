// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.upupoo.apu.mobile",
  "name": "UPUPOO动态壁纸",
  "groups": [
    {
      "key": 1,
      "name": "青少年模式",
      "desc": "点击\"我知道了\"",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"青少年模式\"] +3 [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/14052188"
        }
      ]
    }
  ]
} as any);
