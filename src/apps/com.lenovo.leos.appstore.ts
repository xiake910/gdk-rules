// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
      ],
      "enable": false
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
