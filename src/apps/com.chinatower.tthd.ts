// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chinatower.tthd",
  "name": "铁塔换电",
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
          "key": 0,
          "activityIds": "com.chinatower.fghd.customer.home.HomeNewActivity",
          "matches": "[vid=\"fl_content_container\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13694901"
        }
      ]
    }
  ]
} as any);
