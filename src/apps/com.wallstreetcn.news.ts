// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wallstreetcn.news",
  "name": "华尔街见闻",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "@[vid=\"iv_jump_parent\" || vid=\"iv_jump\"] -2 [text=\"广告\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/94576b14-ad13-4fae-8d49-6b6d1b5096a7",
          "snapshotUrls": [
            "https://i.gkd.li/i/14525329",
            "https://i.gkd.li/i/20430632"
          ]
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 10,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ProxyMainActivity",
          "matches": "[text=\"广告\" || text=\"活动\"] + [vid=\"close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13262717"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "全屏广告-卡片广告",
      "desc": "点击关闭, 无后续确认操作",
      "activityIds": [
        "com.wallstreetcn.news.ProxyMainActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text=\"广告\" || text=\"活动\"] + [id=\"com.wallstreetcn.news:id/close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/13262717"
        }
      ],
      "enable": true
    }
  ]
} as any);
