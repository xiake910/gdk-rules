// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.eco.global.app",
  "name": "ECOVACS HOME",
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
          "matches": "ImageView[vid=\"adview_jump\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538616"
        }
      ],
      "order": -10
    }
  ]
} as any);
