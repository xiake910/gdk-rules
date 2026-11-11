// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yadea.smartmoto",
  "name": "雅迪智行",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": ".main.view.MainActivity",
      "rules": [
        {
          "matches": "[vid=\"tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/30144136"
        }
      ]
    }
  ]
} as any);
