// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vson.smarthome",
  "name": "小美智能",
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
          "action": "back",
          "matches": "[text^=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/15526571"
        }
      ]
    }
  ]
} as any);
