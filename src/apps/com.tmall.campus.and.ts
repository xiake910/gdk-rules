// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tmall.campus.and",
  "name": "天猫校园",
  "groups": [
    {
      "key": 7,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".main.MainActivity",
            "com.tmall.campus.bizwebview.ui.CampusWebActivity"
          ],
          "matches": "[vid=\"close_btn\" || vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22399316",
            "https://i.gkd.li/i/22425649"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.tmall.campus.scancode.activity.ToolsCaptureActivity",
            "com.tmall.campus.bizwebview.ui.CampusWebActivity"
          ],
          "matches": "[vid=\"iv_close_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22558370",
            "https://i.gkd.li/i/22871032"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-打开应用自动点击扫一扫",
      "desc": "仅开屏后触发一次",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"iv_top_scan\"]",
          "snapshotUrls": "https://i.gkd.li/i/22871147"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".main.MainActivity",
            "com.tmall.campus.launcher.SplashActivity"
          ],
          "matches": [
            "[text=\"获取通知权限\"]",
            "[text=\"再想想\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/23124558",
            "https://i.gkd.li/i/23254348"
          ]
        }
      ]
    }
  ]
} as any);
