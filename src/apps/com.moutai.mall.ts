// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.moutai.mall",
  "name": "i茅台",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".MainActivity",
            ".module.splash.SplashActivity"
          ],
          "matches": "[vid=\"ivPic\"] + ViewGroup + [vid=\"vClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745130",
            "https://i.gkd.li/i/12745153"
          ]
        }
      ]
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@[vid=\"vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/12745142"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": [
        "com.moutai.mall.MainActivity",
        "com.moutai.mall.module.splash.SplashActivity"
      ],
      "rules": "[id=\"com.moutai.mall:id/ivPic\"] + ViewGroup + [id=\"com.moutai.mall:id/vClose\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12745130",
        "https://i.gkd.li/import/12745153"
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3001,
      "name": "全屏广告-请求通知权限弹窗",
      "activityIds": "com.moutai.mall.MainActivity",
      "rules": "@[id=\"com.moutai.mall:id/vClose\"] - LinearLayout > [text*=\"开通消息通知\"]",
      "snapshotUrls": "https://i.gkd.li/import/12745142"
    }
  ]
} as any);
