// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cheersedu.app",
  "name": "湛庐阅读",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"iv_version_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13315712"
        }
      ]
    }
  ]
} as any);
