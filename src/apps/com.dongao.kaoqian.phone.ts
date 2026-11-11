// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dongao.kaoqian.phone",
  "name": "会计云课堂",
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
          "matches": "[vid=\"tv_welcome_guide\"]",
          "snapshotUrls": "https://i.gkd.li/i/14809185"
        }
      ],
      "order": -10
    }
  ]
} as any);
