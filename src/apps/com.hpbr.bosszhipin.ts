// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hpbr.bosszhipin",
  "name": "BOSS直聘",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".module.main.activity.MainActivity",
            ".module.launcher.WelcomeActivity"
          ],
          "matches": "@ImageView[vid=\"iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13440781",
            "https://i.gkd.li/i/13623476"
          ]
        }
      ]
    }
  ]
} as any);
