// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.yumme.video",
  "name": "抖音精选",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": [
            "[text=\"立即升级\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12534016",
            "https://i.gkd.li/i/13328599"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "rules": [
        {
          "action": "back",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "TextView[text=\"去商店评分\"]",
          "snapshotUrls": "https://i.gkd.li/i/15858132"
        }
      ],
      "enable": false
    }
  ]
} as any);
