// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.showstartfans.activity",
  "name": "秀动",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": ".activitys.maintab.newmain.MainNewActivity",
          "matches": "[vid=\"img_close_coupon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670432"
        }
      ]
    }
  ]
} as any);
