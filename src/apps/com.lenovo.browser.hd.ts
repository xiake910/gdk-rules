// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": false
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
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-请求通知权限弹窗",
      "activityIds": "com.zui.launcher.drawer.NormalLauncher",
      "fastQuery": true,
      "rules": "[text=\"开启消息通知\"] +n * > [id=\"com.lenovo.browser.hd:id/tv_cancle\"]",
      "snapshotUrls": "https://i.gkd.li/import/13401980",
      "enable": true
    }
  ]
} as any);
