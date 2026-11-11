// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.readera",
  "name": "ReadEra",
  "groups": [
    {
      "key": 1,
      "name": "评价提示-分享提示",
      "desc": "点击右上角的x",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "action": "back",
          "matches": "[text*=\"通过社交网络分享这款应用\"]",
          "snapshotUrls": "https://i.gkd.li/i/22950138"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[desc=\"关闭\"][clickable=true] < * +n * >4 [text^=\"高级版\"]",
          "snapshotUrls": "https://i.gkd.li/i/24335645"
        }
      ],
      "enable": true
    },
    {
      "key": 3,
      "name": "全屏广告-高级版",
      "desc": "注意：此规则会关闭手动打开的高级版开通界面，但该界面有时会自动弹出",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[desc=\"关闭\"][clickable=true] < * + * >5 [text=\"ReadEra Premium\"]",
          "snapshotUrls": "https://i.gkd.li/i/24981838"
        }
      ],
      "enable": true
    },
    {
      "key": 4,
      "name": "评价提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": [
            "[text=\"评价此应用\"]",
            "[text=\"不了，谢谢\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/26088076"
        }
      ],
      "enable": false
    }
  ]
} as any);
