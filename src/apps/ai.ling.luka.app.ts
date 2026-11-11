// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "ai.ling.luka.app",
  "name": "Luka阅读养成",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击[取消]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".page.activity.MainActivity",
          "matches": [
            "[text=\"通知服务未开启\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15796616"
        }
      ],
      "enable": false
    }
  ]
} as any);
