// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wenhua.bamboo",
  "name": "随身行",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击稍后再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".screen.activity.MarketOptionActivity",
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13407555"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-通知弹窗",
      "desc": "点击稍后再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.wenhua.bamboo.screen.activity.MarketOptionActivity",
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "snapshotUrls": "https://i.gkd.li/import/13407555"
        }
      ],
      "enable": false
    }
  ]
} as any);
