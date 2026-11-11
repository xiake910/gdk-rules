// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lenovo.browser.hd",
  "name": "联想浏览器HD",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "matches": "[text=\"发现新版本\"] - * > [vid=\"fl_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401982"
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
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "matches": "[text=\"开启消息通知\"] +n * > [vid=\"tv_cancle\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401980"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-请求通知权限弹窗",
      "activityIds": "com.zui.launcher.drawer.NormalLauncher",
      "fastQuery": true,
      "rules": "[text=\"开启消息通知\"] +n * > [id=\"com.lenovo.browser.hd:id/tv_cancle\"]",
      "snapshotUrls": "https://i.gkd.li/import/13401980",
      "enable": false
    }
  ]
} as any);
