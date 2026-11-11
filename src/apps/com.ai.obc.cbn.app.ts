// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ai.obc.cbn.app",
  "name": "中国广电",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".ui.other.activity.MainActivity",
            ".ui.main.fragment.MainFragment$7$1"
          ],
          "matches": "[id$=\"/ivDis\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12617201",
            "https://i.gkd.li/i/12655061"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
