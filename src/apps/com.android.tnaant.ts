// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.tnaant",
  "name": "蚂蚁加速器",
  "groups": [
    {
      "key": 5,
      "name": "通知提示-公告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.dd.antss.ui.activity.LaunchActivity",
          "matches": "[text=\"公告\"] +2 [text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13713449"
        }
      ]
    }
  ]
} as any);
