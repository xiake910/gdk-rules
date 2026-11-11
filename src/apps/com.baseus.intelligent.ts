// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baseus.intelligent",
  "name": "倍思",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-定位请求",
      "desc": "点击取消-点击取消",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".view.home.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "snapshotUrls": "https://i.gkd.li/i/13827653"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "snapshotUrls": "https://i.gkd.li/i/13827986"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "权限提示-定位提示-定位请求",
      "desc": "点击取消-点击取消",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "snapshotUrls": "https://i.gkd.li/import/13827653"
        },
        {
          "preKeys": 0,
          "key": 1,
          "fastQuery": true,
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "snapshotUrls": "https://i.gkd.li/import/13827986"
        }
      ],
      "enable": false
    }
  ]
} as any);
