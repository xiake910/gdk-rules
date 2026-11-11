// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.cmocmna",
  "name": "腾讯手游加速器",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-悬浮广告",
      "rules": [
        {
          "activityIds": "com.tencent.mocmna.activity.MainActivity",
          "matches": "ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true][childCount=0] + ImageView[childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12847323",
            "https://i.gkd.li/i/12847336",
            "https://i.gkd.li/i/13063271"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-信息流内嵌广告",
      "rules": [
        {
          "activityIds": "com.tencent.mocmna.activity.MainActivity",
          "matches": "@ImageView[clickable=true][childCount=0][index=parent.childCount.minus(1)] -5 [text=\"下载\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12847340",
            "https://i.gkd.li/i/12847364"
          ]
        }
      ]
    }
  ]
} as any);
