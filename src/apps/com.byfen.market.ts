// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.byfen.market",
  "name": "百分网游戏盒子",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[vid=\"idIvClose\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/35d2a562-fe30-4bff-b739-96b37dccd05c",
          "snapshotUrls": "https://i.gkd.li/i/13801613"
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "更新提示",
      "desc": "点击[忽略更新]",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[text=\"忽略更新\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/e92b10b8-b0f8-4dc3-95bf-172829996600",
          "snapshotUrls": "https://i.gkd.li/i/14322280"
        }
      ],
      "enable": false
    },
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/import/13298944"
        },
        {
          "key": 1,
          "matches": "[id=\"com.byfen.market:id/ad_view\"] >3 View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13800021"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
