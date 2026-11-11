// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.keke.ysh1.tz08051h",
  "name": "可可影视",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.salmon.film.main.ui.MainActivity",
      "rules": [
        {
          "key": 1,
          "matches": "[text=\"朕知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13548412"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-开屏提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.salmon.film.main.ui.MainActivity"
      ],
      "rules": [
        {
          "key": 1,
          "name": "网址更新",
          "fastQuery": true,
          "matches": "TextView[text=\"可可影视\"] < LinearLayout >n @TextView[text*=\"知道了\"]",
          "snapshotUrls": "https://i.gkd.li/import/13548412"
        }
      ],
      "enable": false
    }
  ]
} as any);
