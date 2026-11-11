// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.doc360.client",
  "name": "个人图书馆",
  "groups": [
    {
      "key": 5,
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.ReadRoomActivity",
          "matches": "@View[clickable=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13485051"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-阅读-推荐-信息流广告",
      "fastQuery": true,
      "activityIds": "com.doc360.client.activity.ReadRoomActivity",
      "rules": "@FrameLayout[desc^=\"dislike\"] <<n [id=\"com.doc360.client:id/fl_ad_container\"]",
      "snapshotUrls": "https://i.gkd.li/import/13485051",
      "enable": false
    }
  ]
} as any);
