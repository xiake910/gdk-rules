// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.black.unique",
  "name": "全球购骑士特权",
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
          "activityIds": ".feature.home.HomeActivity",
          "matches": "@ImageView[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13499502"
        }
      ]
    }
  ]
} as any);
