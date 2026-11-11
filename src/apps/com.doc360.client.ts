// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
