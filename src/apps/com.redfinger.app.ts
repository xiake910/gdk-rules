// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.redfinger.app",
  "name": "红手指云手机",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"btn_update\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761821"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"rl_screen_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761825"
        }
      ]
    }
  ]
} as any);
