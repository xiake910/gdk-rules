// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "bin.mt.plus.canary",
  "name": "MT管理器Pro",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "bin.mt.plus.Main",
          "matches": "@[text=\"取消\"] + [text=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13561226"
        }
      ]
    }
  ]
} as any);
