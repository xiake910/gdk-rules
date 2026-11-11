// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.space",
  "name": "vivo 官网",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"timer\" || vid=\"jump_over\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/e531ea4e-874f-4da4-bcf1-f585887f753c",
          "snapshotUrls": [
            "https://i.gkd.li/i/16775800",
            "https://i.gkd.li/i/19499311"
          ]
        }
      ],
      "order": -10
    },
    {
      "key": 3,
      "name": "全屏广告-活动广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.VivoSpaceTabActivity",
          "matches": "View[childCount=2] > @[index=1][clickable=true][visibleToUser=true][childCount=0] <<n [vid=\"floating_window_web\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218155",
            "https://i.gkd.li/i/13292907"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.VivoSpaceTabActivity",
          "matches": "Button[vid=\"vbutton_title\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13771581"
        }
      ]
    }
  ]
} as any);
