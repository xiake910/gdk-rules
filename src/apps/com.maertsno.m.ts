// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      "enable": false
    }
  ]
} as any);
