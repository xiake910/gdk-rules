// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xmcy.hykb",
  "name": "好游快爆",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.dialog.UpdateDialog",
          "matches": "@[vid=\"iv_inner_button_close\"] - RelativeLayout >n [vid=\"text_update_tip\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12870604",
            "https://i.gkd.li/i/13297450"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.ui.main.MainActivity",
          "matches": "[vid=\"dialog_home_notice_image_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259427"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "fastQuery": true,
      "activityIds": "com.xmcy.hykb.app.ui.main.MainActivity",
      "rules": "[id=\"com.xmcy.hykb:id/dialog_home_notice_image_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13259427",
      "enable": false
    }
  ]
} as any);
