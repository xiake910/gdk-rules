// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-好评反馈",
      "activityIds": "com.xt.retouch.uilauncher.MainActivity",
      "rules": "[id=\"com.xt.retouch:id/market_feedback_dialog_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13062637",
      "enable": true
    }
  ]
} as any);
