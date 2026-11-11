// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.buyanchuantong.buyanshufa",
  "name": "不厌书法",
  "groups": [
    {
      "key": 3,
      "name": "功能类-功能介绍",
      "desc": "点击跳过",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".SplashActivity",
          "matches": "[text^=\"点击跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425296"
        }
      ]
    }
  ]
} as any);
