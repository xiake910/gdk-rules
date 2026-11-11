// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dewmobile.kuaiya",
  "name": "快牙",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 0,
          "name": "腾讯广告",
          "fastQuery": true,
          "activityIds": ".act.MainActivity",
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid=\"sdk_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13477048"
        }
      ]
    }
  ]
} as any);
