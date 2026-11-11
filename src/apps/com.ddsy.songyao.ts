// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
