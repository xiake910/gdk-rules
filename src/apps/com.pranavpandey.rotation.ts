// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pranavpandey.rotation",
  "name": "Rotation",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[desc=\"Interstitial close button\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/23497601"
        }
      ]
    }
  ]
} as any);
