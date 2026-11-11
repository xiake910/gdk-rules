// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wenhua.bamboo",
  "name": "随身行",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击稍后再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".screen.activity.MarketOptionActivity",
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13407555"
        }
      ]
    }
  ]
} as any);
