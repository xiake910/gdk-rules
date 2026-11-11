// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jxedt",
  "name": "驾校一点通",
  "groups": [
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activitys.exercise.OrderExerciseActivity",
          "matches": "[vid=\"img_question_banner_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13195641"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".ui.activitys.NewHomeActivity",
          "matches": "[vid=\"img_dialog_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476741"
        }
      ]
    }
  ]
} as any);
