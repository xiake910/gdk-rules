// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
    }
  ]
} as any);
