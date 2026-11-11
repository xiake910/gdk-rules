// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dubox.drive",
  "name": "TeraBox",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "TextView[vid=\"tv_skip\"]",
          "snapshotUrls": "https://i.gkd.li/i/13200574"
        },
        {
          "key": 1,
          "matches": "@[vid=\"ivClose\"] - * >2 [id=\"inmobi-ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688384"
        }
      ],
      "order": -10
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "ImageView[vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13200577"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".permission.view.PermissionDialogActivity",
          "matches": "[text=\"Authorize\"] - [vid=\"dialog_button_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688406"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "fastQuery": true,
      "activityIds": "com.dubox.drive.ui.MainActivity",
      "rules": "ImageView[id=\"com.dubox.drive:id/ivClose\"]",
      "snapshotUrls": "https://i.gkd.li/import/13200577",
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-通知权限",
      "fastQuery": true,
      "activityIds": "com.dubox.drive.permission.view.PermissionDialogActivity",
      "rules": "[text=\"Authorize\"] - [id=\"com.dubox.drive:id/dialog_button_cancel\"]",
      "snapshotUrls": "https://i.gkd.li/import/13688406",
      "enable": false
    }
  ]
} as any);
