// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.guodongbaohe.app",
  "name": "果冻宝盒",
  "groups": [
    {
      "key": 6,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.AdvertisementTwoActivity",
          "matches": "LinearLayout[vid=\"close_dialog_lv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13577877"
        }
      ]
    },
    {
      "enable": false,
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.guodongbaohe.app.activity.AdvertisementTwoActivity",
      "rules": "LinearLayout[id=\"com.guodongbaohe.app:id/close_dialog_lv\"]",
      "snapshotUrls": "https://i.gkd.li/import/13577877"
    }
  ]
} as any);
