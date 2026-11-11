// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.overlook.android.fing",
  "name": "Fing",
  "groups": [
    {
      "key": 0,
      "name": "其他-教程弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.main.SplashActivity",
          "matches": "[text=\"關閉\"]",
          "snapshotUrls": "https://i.gkd.li/i/15521827"
        }
      ],
      "enable": false
    }
  ]
} as any);
