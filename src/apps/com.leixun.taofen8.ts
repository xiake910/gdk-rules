// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.leixun.taofen8",
  "name": "淘粉吧",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "@View[clickable=true] <<n [id=\"com.leixun.taofen8:id/fl_advert_container\"]",
          "snapshotUrls": "https://i.gkd.li/import/13937324"
        }
      ],
      "order": -10
    }
  ]
} as any);
