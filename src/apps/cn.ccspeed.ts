// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.ccspeed",
  "name": "CC加速器",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-加速页分享抽奖浮窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.MainActivity",
          "matches": "@ImageView[visibleToUser=true] + [vid=\"iv_float\"]",
          "snapshotUrls": "https://i.gkd.li/i/13539299"
        }
      ]
    },
    {
      "key": 3000,
      "enable": false,
      "name": "全屏广告-加速页-分享抽奖浮窗",
      "activityIds": "cn.ccspeed.app.MainActivity",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "activity",
      "actionMaximum": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"cn.ccspeed:id/iv_float\"] - @ImageView < FrameLayout[id=\"cn.ccspeed:id/float_layout\"]",
          "snapshotUrls": "https://i.gkd.li/import/13539299"
        }
      ]
    }
  ]
} as any);
