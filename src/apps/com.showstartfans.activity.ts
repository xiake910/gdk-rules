// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.showstartfans.activity",
  "name": "秀动",
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
          "activityIds": ".activitys.maintab.newmain.MainNewActivity",
          "matches": "[vid=\"img_close_coupon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670432"
        }
      ]
    }
  ]
} as any);
