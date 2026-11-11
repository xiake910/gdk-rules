// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.tnaant",
  "name": "蚂蚁加速器",
  "groups": [
    {
      "key": 5,
      "name": "通知提示-公告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.dd.antss.ui.activity.LaunchActivity",
          "matches": "[text=\"公告\"] +2 [text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13713449"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[text=\"公告\"] +2 [text=\"我知道了\"]",
      "snapshotUrls": "https://i.gkd.li/import/13713449",
      "enable": false
    }
  ]
} as any);
