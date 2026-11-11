// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      "order": -10,
      "enable": true
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
      ],
      "enable": true
    }
  ]
} as any);
