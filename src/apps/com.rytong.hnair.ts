// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.rytong.hnair",
  "name": "海南航空",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.hnair.airlines.ui.main.MainActivity",
          "matches": "ImageView[id*=\"com.rytong.hnair:id/iv_cloes\"]",
          "snapshotUrls": "https://i.gkd.li/i/12846381"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-弹窗广告",
      "activityIds": "com.hnair.airlines.ui.main.MainActivity",
      "rules": "ImageView[id*=\"com.rytong.hnair:id/iv_cloes\"]",
      "snapshotUrls": "https://i.gkd.li/import/12846381",
      "enable": false
    }
  ]
} as any);
