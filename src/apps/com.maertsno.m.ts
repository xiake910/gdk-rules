// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.maertsno.m",
  "name": "OnStream",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "co.notix.interstitial.InterstitialActivity",
          "matches": "[vid=\"tv_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13842558"
        }
      ]
    }
  ]
} as any);
