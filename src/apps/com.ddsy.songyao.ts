// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ddsy.songyao",
  "name": "叮当快药",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-优惠卷提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "[vid=\"iv_coupon_bottom\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13048720"
        }
      ]
    }
  ]
} as any);
