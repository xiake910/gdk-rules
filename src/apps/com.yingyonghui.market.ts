// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yingyonghui.market",
  "name": "应用汇",
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
          "key": 0,
          "matches": "[vid=\"splashAdvert_skipLayout\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/32155585"
        }
      ],
      "order": -10
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "key": 0,
          "name": "快手广告",
          "fastQuery": true,
          "activityIds": ".ui.MainActivity",
          "matches": [
            "[text=\"广告\"]",
            "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13538316"
        }
      ]
    }
  ]
} as any);
