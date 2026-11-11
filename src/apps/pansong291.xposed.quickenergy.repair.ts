// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "pansong291.xposed.quickenergy.repair",
  "name": "芝麻粒",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-开屏[提示]弹窗",
      "desc": "点击[我知道了]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "pansong291.xposed.quickenergy.ui.MainActivity",
          "matches": "[text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13445477"
        }
      ],
      "enable": false
    },
    {
      "name": "全屏广告-开屏弹窗跳过",
      "key": 3000,
      "desc": "打开app点击知道了",
      "rules": [
        {
          "activityIds": [
            "pansong291.xposed.quickenergy.ui.MainActivity"
          ],
          "matches": [
            "[id='android:id/button2']"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13445477"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
