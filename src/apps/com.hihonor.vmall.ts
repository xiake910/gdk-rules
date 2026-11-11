// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": true
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
      ],
      "enable": false
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
      "enable": true
    }
  ]
} as any);
