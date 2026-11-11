// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fongmi.android.tv",
  "name": "影视",
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
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[vid=\"buttonPanel\"] >2 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14035154"
        }
      ]
    }
  ]
} as any);
