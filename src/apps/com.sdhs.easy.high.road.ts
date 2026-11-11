// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sdhs.easy.high.road",
  "name": "e高速",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 0,
          "name": "腾讯广告",
          "fastQuery": true,
          "activityIds": "com.sdhs.easy.main.activity.MainActivity",
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >3 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670340"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-卡片式广告",
      "rules": [
        {
          "key": 0,
          "name": "腾讯广告",
          "activityIds": "com.sdhs.easy.main.activity.MainActivity",
          "matches": [
            "[desc^=\"logoad\"]",
            "[desc^=\"dislike\"] > View[clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13670340"
        }
      ],
      "enable": false
    }
  ]
} as any);
