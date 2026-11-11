// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tt.turbo",
  "name": "甜糖",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[desc=\"取消\"] + [desc=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292907"
        }
      ]
    }
  ]
} as any);
