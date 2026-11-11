// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.danlan.xiaolan",
  "name": "Blued极速版",
  "groups": [
    {
      "key": 3,
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "activityIds": [
        "com.blued.android.core.ui.TerminalActivity",
        "com.soft.blued.ui.home.HomeActivity"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "[vid=\"img_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13421613",
            "https://i.gkd.li/i/13421923"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13421622",
            "https://i.gkd.li/i/13422170"
          ]
        }
      ]
    },
    {
      "key": 1,
      "fastQuery": true,
      "name": "局部广告-附近的人-广告卡片",
      "activityIds": "com.soft.blued.ui.home.HomeActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.danlan.xiaolan:id/ad_container\"] >n [id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13421613"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/13421622"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "fastQuery": true,
      "name": "局部广告-来访-广告卡片",
      "activityIds": "com.blued.android.core.ui.TerminalActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13421923"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/13422170"
        }
      ],
      "enable": false
    }
  ]
} as any);
