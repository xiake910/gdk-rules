// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "net.pchome.kds",
  "name": "kds宽带山",
  "groups": [
    {
      "key": 1,
      "name": "分段广告-应用内卡片广告",
      "activityIds": ".View.activity.TopicActivity2",
      "rules": [
        {
          "key": 0,
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "snapshotUrls": "https://i.gkd.li/i/13043221"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049609"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "局部广告-应用内广告卡片",
      "activityIds": "net.pchome.kds.View.activity.TopicActivity2",
      "rules": [
        {
          "key": 0,
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "snapshotUrls": "https://i.gkd.li/import/13043221"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/13049609"
        }
      ],
      "enable": true
    }
  ]
} as any);
