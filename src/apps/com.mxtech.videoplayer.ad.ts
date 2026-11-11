// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
      ]
    }
  ]
} as any);
