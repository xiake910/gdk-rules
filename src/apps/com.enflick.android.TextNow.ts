// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.enflick.android.TextNow",
  "name": "TextNow",
  "groups": [
    {
      "key": 1,
      "name": "其他-设为默认应用提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".activities.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[vid=\"btn_dismiss\"][text=\"Not Now\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630460"
        },
        {
          "preKeys": [
            0
          ],
          "matches": "[id=\"android:id/button2\"][text=\"SKIP\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630463"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知/链接蓝牙附件设备",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.MainActivity",
          "matches": "@ImageView[clickable=true] <2 [vid=\"calling_banner\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13657279",
            "https://i.gkd.li/i/13657280"
          ]
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-设为默认应用提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.enflick.android.TextNow:id/btn_dismiss\"][text=\"Not Now\"]",
          "snapshotUrls": "https://i.gkd.li/import/13630460"
        },
        {
          "preKeys": 0,
          "matches": "[id=\"android:id/button2\"][text=\"SKIP\"]",
          "snapshotUrls": "https://i.gkd.li/import/13630463"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "权限提示-通知/链接蓝牙附件设备 权限申请",
      "fastQuery": true,
      "activityIds": "com.enflick.android.TextNow.activities.MainActivity",
      "rules": "@ImageView[clickable=true] <2 [id=\"com.enflick.android.TextNow:id/calling_banner\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/13657279",
        "https://i.gkd.li/import/13657280"
      ],
      "enable": false
    }
  ]
} as any);
