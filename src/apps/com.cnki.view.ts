// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cnki.view",
  "name": "知网文化",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".core.navigator.main.HomeActivity",
            ".core.tramp.main.SplashActivity"
          ],
          "matches": "[vid=\"update_undo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12755689",
            "https://i.gkd.li/i/12755700"
          ]
        }
      ]
    }
  ]
} as any);
