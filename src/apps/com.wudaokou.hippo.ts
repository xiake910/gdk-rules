// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wudaokou.hippo",
  "name": "盒马",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".launcher.splash.SplashActivity",
          "matches": "[vid=\"home_pop_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/7719d496-8331-4ddd-996d-5e1b5a88d7b7",
          "snapshotUrls": "https://i.gkd.li/i/22988411"
        }
      ],
      "enable": true
    }
  ]
} as any);
