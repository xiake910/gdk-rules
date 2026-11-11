// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": true
    }
  ]
} as any);
