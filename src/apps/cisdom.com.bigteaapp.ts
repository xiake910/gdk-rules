// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cisdom.com.bigteaapp",
  "name": "大茶肆",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text$=\"抽奖送大礼\"] < WebView - [vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228579"
        }
      ]
    }
  ]
} as any);
