// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.vmall",
  "name": "荣耀商城",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-应用内弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.vmall.client.base.fragment.VmallWapActivity",
            "com.vmall.client.splash.fragment.SplashActivity"
          ],
          "matches": "[vid=\"gift_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13060881"
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
          "activityIds": [
            "com.vmall.client.messageCenter.fragment.MessageCenterActivity",
            "com.vmall.client.base.fragment.VmallWapActivity"
          ],
          "matches": [
            "[text=\"开启消息通知\"]",
            "[vid=\"notification_close\" || vid=\"iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13959029",
            "https://i.gkd.li/i/16776398"
          ]
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-应用内广告弹窗",
      "activityIds": [
        "com.vmall.client.base.fragment.VmallWapActivity",
        "com.vmall.client.splash.fragment.SplashActivity"
      ],
      "rules": "[id=\"com.hihonor.vmall:id/gift_close_iv\"]",
      "snapshotUrls": "https://i.gkd.li/import/13060881",
      "enable": false
    }
  ]
} as any);
