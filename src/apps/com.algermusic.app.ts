// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.algermusic.app",
  "name": "AlgerMusicPlayer",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[text$=\"点击即可进入\"][visibleToUser=true] -7 [text=\"支持开发者\"] <2 View <2 WebView <<3 [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/3383969c-2ebb-41c9-96d7-d83655af7aa6",
          "snapshotUrls": "https://i.gkd.li/i/25768081"
        }
      ],
      "order": -10
    }
  ]
} as any);
