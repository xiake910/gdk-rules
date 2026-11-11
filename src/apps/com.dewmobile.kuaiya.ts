// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-卡片式广告",
      "rules": [
        {
          "key": 0,
          "name": "腾讯广告",
          "activityIds": "com.dewmobile.kuaiya.act.MainActivity",
          "matches": "ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": "https://i.gkd.li/import/13477048"
        }
      ],
      "enable": false
    }
  ]
} as any);
