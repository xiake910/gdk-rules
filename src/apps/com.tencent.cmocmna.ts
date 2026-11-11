// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": true
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
      ],
      "enable": true
    }
  ]
} as any);
