// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vmos.pro",
  "name": "VMOS Pro",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.main.MainActivity",
          "matches": "[text=\"不再显示本活动\"]",
          "snapshotUrls": "https://i.gkd.li/i/13536416"
        }
      ]
    }
  ]
} as any);
