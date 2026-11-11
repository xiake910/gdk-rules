// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.suishenji.cdscc.hjapp",
  "name": "大师兄影视",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "matches": "[vid=\"ms_activity_sdk_interstitial_cacel\"]",
          "snapshotUrls": "https://i.gkd.li/i/26344634"
        }
      ],
      "enable": true
    }
  ]
} as any);
