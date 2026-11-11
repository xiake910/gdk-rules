// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hnjiajie.zhixiaole",
  "name": "智校乐",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"tev_countdown\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/0b7ec3a5-d601-489a-a50c-32c876f38edf",
          "snapshotUrls": "https://i.gkd.li/i/20745490"
        }
      ],
      "order": -10
    }
  ]
} as any);
