// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yfoo.listen",
  "name": "聆听音乐",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": "x.activity.HomeActivity",
          "matches": "@[text=\"取消\"] < * > [text=\"下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/15856014"
        }
      ]
    }
  ]
} as any);
