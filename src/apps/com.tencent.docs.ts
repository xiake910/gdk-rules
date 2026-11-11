// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.docs",
  "name": "腾讯文档",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "@LinearLayout[clickable=true] - [text^=\"互动广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13198082",
            "https://i.gkd.li/i/23557410"
          ]
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".DocsFlutterActivity",
          "matches": "@[desc=\"暂不更新\"] + [desc=\"现在更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198091"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "activityIds": ".DocsFlutterActivity",
          "matches": "@ImageView[clickable=true] - [desc=\"限时购买\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198097"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "actionDelay": 200,
          "activityIds": ".DocsFlutterActivity",
          "matches": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
          "snapshotUrls": "https://i.gkd.li/i/13242404"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-广告卡片",
      "activityIds": "com.tencent.docs.DocsFlutterActivity",
      "rules": "[desc=\"限时购买\"] + ImageView[clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/13198097",
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-广告弹窗",
      "actionDelay": 200,
      "activityIds": "com.tencent.docs.DocsFlutterActivity",
      "rules": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
      "snapshotUrls": "https://i.gkd.li/import/13242404",
      "enable": false
    }
  ]
} as any);
