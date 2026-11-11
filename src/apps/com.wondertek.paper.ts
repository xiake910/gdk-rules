// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wondertek.paper",
  "name": "澎湃新闻",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.thepaper.paper.ui.main.MainActivity",
          "matches": "[vid=\"relative_layout\"] + [vid=\"close_photo\"]",
          "snapshotUrls": "https://i.gkd.li/i/12899226"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-应用内弹窗",
      "activityIds": [
        "cn.thepaper.paper.ui.main.MainActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.wondertek.paper:id/second_num\"] <2 [id=\"com.wondertek.paper:id/relative_layout\"] + [id=\"com.wondertek.paper:id/close_photo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12899226"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
