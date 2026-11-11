// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cnki.view",
  "name": "知网文化",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".core.navigator.main.HomeActivity",
            ".core.tramp.main.SplashActivity"
          ],
          "matches": "[vid=\"update_undo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12755689",
            "https://i.gkd.li/i/12755700"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
