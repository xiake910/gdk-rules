// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xt.retouch",
  "name": "醒图",
  "groups": [
    {
      "key": 5,
      "name": "评价提示-好评反馈",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".uilauncher.MainActivity",
          "matches": "[vid=\"market_feedback_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13062637"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-好评反馈",
      "activityIds": "com.xt.retouch.uilauncher.MainActivity",
      "rules": "[id=\"com.xt.retouch:id/market_feedback_dialog_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13062637",
      "enable": false
    }
  ]
} as any);
