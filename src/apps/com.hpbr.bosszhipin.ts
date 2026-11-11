// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": false
    },
    {
      "key": 1,
      "name": "全屏广告-通知权限授权弹窗",
      "activityIds": [
        "com.hpbr.bosszhipin.module.main.activity.MainActivity",
        "com.hpbr.bosszhipin.module.launcher.WelcomeActivity"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "rules": [
        {
          "matches": "@ImageView[id=\"com.hpbr.bosszhipin:id/iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13440781",
            "https://i.gkd.li/import/13623476"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
