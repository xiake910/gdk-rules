// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.ccspeed",
  "name": "CC加速器",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-加速页分享抽奖浮窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.MainActivity",
          "matches": "@ImageView[visibleToUser=true] + [vid=\"iv_float\"]",
          "snapshotUrls": "https://i.gkd.li/i/13539299"
        }
      ]
    }
  ]
} as any);
