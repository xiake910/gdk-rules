// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hd.smartVillage",
  "name": "恒大智慧社区",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".modules.main.MainActivity",
            ".modules.h5service.H5WebActivity"
          ],
          "matches": "View[vid=\"notificationSettingCloseBtn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13223669",
            "https://i.gkd.li/i/13293000"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".modules.main.MainActivity",
          "matches": "TextView[vid=\"tv_upgrade_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13223642"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-关闭开启通知弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": [
        "com.hd.smartVillage.modules.main.MainActivity",
        "com.hd.smartVillage.modules.h5service.H5WebActivity"
      ],
      "rules": "View[id=\"com.hd.smartVillage:id/notificationSettingCloseBtn\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/13223669",
        "https://i.gkd.li/import/13293000"
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3001,
      "name": "全屏广告-更新弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": "com.hd.smartVillage.modules.main.MainActivity",
      "rules": "TextView[id=\"com.hd.smartVillage:id/tv_upgrade_cancel\"][text=\"取消\"]",
      "snapshotUrls": "https://i.gkd.li/import/13223642"
    }
  ]
} as any);
