// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.duitang.main",
  "name": "堆糖",
  "groups": [
    {
      "key": 2,
      "name": "局部广告-信息流广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            ".business.",
            ".activity."
          ],
          "matches": "[vid=\"adOptionEntry\" || vid=\"adClose\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14232228",
            "https://i.gkd.li/i/14232332",
            "https://i.gkd.li/i/14232347",
            "https://i.gkd.li/i/14232348",
            "https://i.gkd.li/i/14232368",
            "https://i.gkd.li/i/14232218",
            "https://i.gkd.li/i/14232352"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "评价提示",
      "desc": "点击[下次再说]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".business.main.NAMainActivity",
          "matches": "[vid=\"scoreDuitangCancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14273094"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "全屏广告-图片页弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".business.display.ImageActivity",
            ".business.main.NAMainActivity"
          ],
          "matches": "[vid=\"popUpbtnClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13997011",
            "https://i.gkd.li/i/14332109"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".business.main.NAMainActivity",
          "matches": "@[vid=\"dialogNegative\"] +2 [text=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/14273121"
        }
      ],
      "enable": false
    },
    {
      "name": "青少年模式",
      "desc": "关闭青少年模式提醒弹窗",
      "key": 1,
      "actionMaximum": 1,
      "activityIds": [
        "com.duitang.main.business.main.NAMainActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/teenGuideKnown\"]",
          "snapshotUrls": "https://i.gkd.li/import/13202230"
        }
      ],
      "enable": false
    },
    {
      "name": "全屏广告-首页-推荐浏览广告",
      "desc": "关闭推荐浏览页面广告",
      "key": 3000,
      "activityIds": [
        "com.duitang.main.business.main.NAMainActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/adOptionEntry\"]",
          "snapshotUrls": "https://i.gkd.li/import/13202725"
        }
      ],
      "enable": false
    },
    {
      "name": "全屏广告-去商店评分",
      "desc": "点击[下次再说]",
      "key": 3001,
      "actionMaximum": 1,
      "fastQuery": true,
      "activityIds": [
        "com.miui.home.launcher.Launcher"
      ],
      "rules": [
        {
          "matches": "[id=\"com.duitang.main:id/scoreDuitangCancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13203217"
        }
      ],
      "enable": false
    }
  ]
} as any);
