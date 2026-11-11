// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jisu.manhua",
  "name": "漫画人极速版",
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
          "activityIds": "com.ilike.cartoon.activities.HomeActivity",
          "matches": "[vid=\"iv_promotion\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688186"
        }
      ]
    }
  ]
} as any);
