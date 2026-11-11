// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sgcc.evs.echarge",
  "name": "e充电",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.evs.echarge.dev.ui.advertisement.SplashActivity",
            "com.evs.echarge.dev.ui.MainActivity"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13958838",
            "https://i.gkd.li/i/14005508"
          ]
        }
      ]
    }
  ]
} as any);
