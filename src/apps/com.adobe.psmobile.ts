// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
