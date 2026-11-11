// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
