// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "me.chunyu.ChunyuDoctor",
  "name": "春雨医生",
  "groups": [
    {
      "key": 10,
      "name": "评价提示-应用评分弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".Activities.MainActivity",
            ".Activities.WelcomeActivity"
          ],
          "matches": "[text=\"给应用评分\"] +(2) RelativeLayout > [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12661907",
            "https://i.gkd.li/i/12661924"
          ]
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-应用评分弹窗",
      "activityIds": [
        "me.chunyu.ChunyuDoctor.Activities.WelcomeActivity",
        "me.chunyu.ChunyuDoctor.Activities.MainActivity"
      ],
      "rules": [
        {
          "matches": "[text=\"给应用评分\"] +(2) RelativeLayout > [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12661907",
            "https://i.gkd.li/import/12661924"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
