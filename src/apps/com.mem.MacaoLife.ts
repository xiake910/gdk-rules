// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mem.MacaoLife",
  "name": "澳覓",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.mem.life.ui.launch.LaunchActivity",
          "matches": "[vid=\"cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350665"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-浮窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mem.life.ui.home.HomeActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350685"
        }
      ]
    }
  ]
} as any);
