// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dtdream.publictransit",
  "name": "杭州公共交通",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.dtchuxing.main.MainActivity",
          "matches": "[vid=\"ifv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12830113"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "activityIds": "com.dtchuxing.main.MainActivity",
      "rules": "[id=\"com.dtdream.publictransit:id/ifv_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12830113",
      "enable": false
    }
  ]
} as any);
