// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "dxwt.questionnaire.ui",
  "name": "10000社区",
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
          "matches": "@View[desc^=\"关闭\"][visibleToUser=true] <3 FrameLayout < FrameLayout < FrameLayout < [vid=\"container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255491",
          "excludeSnapshotUrls": "https://i.gkd.li/i/13259475"
        }
      ],
      "order": -10
    }
  ]
} as any);
