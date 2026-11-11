// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
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
