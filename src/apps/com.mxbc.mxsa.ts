// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mxbc.mxsa",
  "name": "蜜雪冰城",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-主界面弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 1,
          "activityIds": ".modules.main.MainActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12929345"
        }
      ]
    }
  ]
} as any);
