// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shanghaionstar",
  "name": "安吉星",
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
          "matches": "[vid=\"jump_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/13071523"
        }
      ],
      "order": -10
    }
  ]
} as any);
