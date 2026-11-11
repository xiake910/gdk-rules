// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.adobe.psmobile",
  "name": "Photoshop Express",
  "groups": [
    {
      "key": 1,
      "name": "评价提示",
      "desc": "点击[不,谢谢]",
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "activityIds": ".MainActivity",
          "matches": "@[desc=\"不，谢谢\"] < [childCount=2] <4 View[childCount=4] < View < WebView < * < * < [id=\"android:id/custom\"]",
          "snapshotUrls": "https://i.gkd.li/i/26115696"
        }
      ]
    }
  ]
} as any);
