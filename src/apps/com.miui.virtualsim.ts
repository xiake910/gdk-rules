// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.virtualsim",
  "name": "全球上网",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
          "matches": "[vid=\"img_close_btn\"]",
          "exampleUrls": "https://m.gkd.li/57941037/76a7cf39-06f1-4e1b-9bb6-fd8b1ad25e8e",
          "snapshotUrls": "https://i.gkd.li/i/15981731"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
      "rules": "[id=\"com.miui.virtualsim:id/img_close_btn\"]",
      "snapshotUrls": "https://i.gkd.li/import/13238467",
      "enable": false
    }
  ]
} as any);
