// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
