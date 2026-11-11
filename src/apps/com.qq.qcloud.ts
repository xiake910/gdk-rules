// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qq.qcloud",
  "name": "腾讯微云",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.WeiyunRootActivity",
          "matches": "@LinearLayout -(1,2) [text=\"互动广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19752123",
            "https://i.gkd.li/i/19752144"
          ]
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
