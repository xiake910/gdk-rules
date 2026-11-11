// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.jsmcc:id/cancelVersionTV\"]",
          "snapshotUrls": "https://i.gkd.li/import/13327322"
        }
      ],
      "enable": false
    }
  ]
} as any);
