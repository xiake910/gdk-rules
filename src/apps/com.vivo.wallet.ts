// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.wallet",
  "name": "钱包",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".bookkeep.activity.BookKeepMainActivity",
          "matches": "@[clickable=true] > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440881"
        }
      ]
    }
  ]
} as any);
