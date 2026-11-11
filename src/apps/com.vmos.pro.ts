// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vmos.pro",
  "name": "VMOS Pro",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.main.MainActivity",
          "matches": "[text=\"不再显示本活动\"]",
          "snapshotUrls": "https://i.gkd.li/i/13536416"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "fastQuery": true,
      "activityIds": "com.vmos.pro.activities.main.MainActivity",
      "rules": "[id=\"com.vmos.pro:id/iv_dismiss\"] ",
      "snapshotUrls": "https://i.gkd.li/import/13536416",
      "enable": false
    }
  ]
} as any);
