// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xt.retouch",
  "name": "醒图",
  "groups": [
    {
      "key": 5,
      "name": "评价提示-好评反馈",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".uilauncher.MainActivity",
          "matches": "[vid=\"market_feedback_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13062637"
        }
      ]
    }
  ]
} as any);
