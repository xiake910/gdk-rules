// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qiyi.video.lite",
  "name": "爱奇艺极速版",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13797162"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
