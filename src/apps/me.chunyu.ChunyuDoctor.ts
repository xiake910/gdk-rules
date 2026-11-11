// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
