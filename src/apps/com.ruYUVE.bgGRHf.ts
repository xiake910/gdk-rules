// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ruYUVE.bgGRHf",
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
          "action": "clickCenter",
          "forcedTime": 10000,
          "matches": "[desc=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14667107"
        }
      ],
      "order": -10
    }
  ]
} as any);
