// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mxtech.videoplayer.ad",
  "name": "MX 播放器",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-谷歌广告",
      "activityIds": ".ActivityMediaList",
      "rules": [
        {
          "matches": "[desc=\"Advertisement\"] + View >(2) View + Button[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12642204"
        }
      ],
      "enable": true
    }
  ]
} as any);
