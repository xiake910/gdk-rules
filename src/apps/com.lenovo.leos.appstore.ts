// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lenovo.leos.appstore",
  "name": "联想应用中心",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "matches": "@[vid=\"dialog_cancel\"] + [text$=\"版本更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401992"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.NotificationGuideActivity",
          "matches": [
            "[text$=\"打开应用中心通知\"]",
            "[text=\"知道了\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13401991"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-请求通知权限弹窗",
      "activityIds": "com.lenovo.leos.appstore.activities.NotificationGuideActivity",
      "fastQuery": true,
      "rules": "[text$=\"打开应用中心通知\"] +n [text=\"知道了\"]",
      "snapshotUrls": "https://i.gkd.li/import/13401991",
      "enable": false
    }
  ]
} as any);
