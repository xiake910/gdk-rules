// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.wps.yun",
  "name": "金山文档",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-列表卡片广告",
      "desc": "点击右侧x",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.IndexActivity",
          "matches": "[vid=\"rootGroup\"][childCount=5] >  [text^=\"实用技巧\"] +3 [vid=\"moreIconRight\"]",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "snapshotUrls": "https://i.gkd.li/i/13495062",
          "excludeSnapshotUrls": "https://i.gkd.li/i/14333322"
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
          "activityIds": ".ui.IndexActivity",
          "matches": "[text=\"发现新版本\"] +3 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14333103"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.IndexActivity",
          "matches": "[text=\"开启推送通知\"] +2 * > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14333362"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-列表广告",
      "desc": "点击右侧x",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "cn.wps.yun.ui.IndexActivity",
          "matches": "[id=\"cn.wps.yun:id/rootGroup\"][childCount=5] >  [id=\"cn.wps.yun:id/moreIconRight\"]",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "snapshotUrls": "https://i.gkd.li/import/13495062"
        }
      ],
      "enable": false
    }
  ]
} as any);
