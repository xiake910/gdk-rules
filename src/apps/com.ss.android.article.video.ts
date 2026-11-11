// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.article.video",
  "name": "西瓜视频",
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
          "activityIds": ".activity.SplashActivity",
          "matches": "@[desc=\"关闭\"] - LinearLayout > [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13328430"
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
          "activityIds": ".activity.SplashActivity",
          "matches": [
            "[text=\"开启推送通知\"]",
            "[text=\"暂不开启\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13456568"
        }
      ],
      "enable": false
    },
    {
      "key": 6,
      "name": "全屏广告-红包弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "@FlattenUIImage[clickable=true] -2 [text=\"开心收下\"]",
          "snapshotUrls": "https://i.gkd.li/i/13620299"
        }
      ],
      "enable": false
    },
    {
      "key": 0,
      "name": "青少年模式",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[text$=\"青少年模式\"] +n [text=\"我知道了\"]",
      "snapshotUrls": "https://i.gkd.li/import/12472628",
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-通知弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "rules": "@TextView[id=\"com.ss.android.article.video:id/sj\"][text=\"暂不开启\"]",
      "snapshotUrls": "https://i.gkd.li/import/13456568",
      "enable": false
    }
  ]
} as any);
