// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.baike",
  "name": "百度百科",
  "groups": [
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "desc": "自动点击\"不允许\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".component.push.NotificationEnableDialog",
          "matches": "[text^=\"打开推送通知\"] +2 [text=\"不允许\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755717"
        }
      ]
    }
  ]
} as any);
