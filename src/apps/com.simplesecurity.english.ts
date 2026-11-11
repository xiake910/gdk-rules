// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.simplesecurity.english",
  "name": "水果派",
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
          "matchDelay": 3000,
          "matches": "[text=\"关闭广告\"]",
          "exampleUrls": "https://e.gkd.li/8718ddc4-8775-482e-a259-bc43c7171fd8",
          "snapshotUrls": "https://i.gkd.li/i/13447714"
        }
      ],
      "order": -10
    }
  ]
} as any);
