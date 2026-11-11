// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jsmcc",
  "name": "中国移动江苏",
  "groups": [
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "activityIds": ".ui.MainActivityGroupNew",
          "matches": "ImageView[vid=\"notice_dia\"]",
          "snapshotUrls": "https://i.gkd.li/i/16215987"
        }
      ]
    }
  ]
} as any);
