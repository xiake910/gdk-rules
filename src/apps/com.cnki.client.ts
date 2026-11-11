// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cnki.client",
  "name": "手机知网",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".core.tramp.SplashActivity",
          "matches": "[vid=\"update_undo\"]",
          "snapshotUrls": "https://i.gkd.li/i/12854857"
        }
      ]
    }
  ]
} as any);
