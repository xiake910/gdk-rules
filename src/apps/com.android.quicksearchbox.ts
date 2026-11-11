// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.quicksearchbox",
  "name": "搜索",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".SearchActivityTransparent",
          "matches": "[vid=\"ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13897834"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-广告卡片",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": "[vid=\"ad_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13897834",
      "enable": false
    }
  ]
} as any);
