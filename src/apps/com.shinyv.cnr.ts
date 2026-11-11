// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shinyv.cnr",
  "name": "云听",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "yt.com.module.home.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "exampleUrls": "https://e.gkd.li/d1680c51-70c8-4d50-9560-f5e091685ee8",
          "snapshotUrls": "https://i.gkd.li/i/16914130"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": "yt.com.module.home.MainActivity",
      "rules": "[id=\"com.shinyv.cnr:id/iv_ad\"] + [id=\"com.shinyv.cnr:id/iv_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12817933",
      "enable": false
    }
  ]
} as any);
