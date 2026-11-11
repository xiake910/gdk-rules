// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
