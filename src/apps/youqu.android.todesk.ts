// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "youqu.android.todesk",
  "name": "ToDesk",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "关闭卡片广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": [
            ".activity.WelcomeActivity",
            ".activity.MainActivity"
          ],
          "matches": "[vid=\"ivAdClose\" || vid=\"llClose\"]",
          "exampleUrls": "https://m.gkd.li/57941037/7535a849-b4a7-4dd5-a6c1-4d3def042d70",
          "snapshotUrls": [
            "https://i.gkd.li/i/14175556",
            "https://i.gkd.li/i/13228546"
          ]
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "通知提示-套餐到期",
      "desc": "①选[不再提示] ②点击x掉",
      "fastQuery": true,
      "activityIds": ".activity.MainActivity",
      "rules": [
        {
          "key": 0,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "[vid=\"tvNotNotice\"]"
        },
        {
          "key": 1,
          "matches": "[vid=\"ivClose\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27383310"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-广告卡片",
      "desc": "设备列表和连接界面中的广告卡片",
      "activityIds": [
        "youqu.android.todesk.activity.WelcomeActivity",
        "youqu.android.todesk.activity.MainActivity"
      ],
      "fastQuery": true,
      "rules": "[id=\"youqu.android.todesk:id/sivDeviceBanner\"] + [id=\"youqu.android.todesk:id/llClose\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/13228546",
        "https://i.gkd.li/import/13256552",
        "https://i.gkd.li/import/13296380"
      ],
      "enable": true
    }
  ]
} as any);
