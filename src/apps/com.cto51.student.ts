// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cto51.student",
  "name": "51CTO",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".foundation.activities.MainActivity",
          "matches": "@[vid=\"iv_close\"] - [vid=\"rl_ad\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b646bfb4-0d23-483e-b03e-f827f1c4b155",
          "snapshotUrls": "https://i.gkd.li/i/18308616"
        }
      ]
    }
  ]
} as any);
