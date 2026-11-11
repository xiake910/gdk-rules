// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wacai365",
  "name": "挖财记账",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".HomeActivity",
            "com.wacai.android.wind.splash.WindDialogActivity"
          ],
          "matches": "@ImageView[vid=\"tv_cancel\"] - TextView[text^=\"新版本\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13249620",
            "https://i.gkd.li/i/13772291"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".HomeActivity",
          "matches": "[id^=\"com.wacai365:id/promote_banner_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13249666"
        }
      ]
    },
    {
      "key": 3,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "matches": "@View[clickable=true] <2 * <2 * < [vid=\"flTTContainer\"]",
          "snapshotUrls": "https://i.gkd.li/import/14021540"
        },
        {
          "key": 3,
          "fastQuery": true,
          "matches": "[text^=\"跳过\"][text.length<=6]",
          "snapshotUrls": "https://i.gkd.li/import/13399124"
        }
      ],
      "order": -10
    }
  ]
} as any);
