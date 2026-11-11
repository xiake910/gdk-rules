// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.nowcoder.app.florida",
  "name": "牛客",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionCdKey": 0,
      "actionMaximumKey": 0,
      "rules": [
        {
          "key": 0,
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < FrameLayout[childCount=1] < [vid=\"fl_splash_container\"]",
          "snapshotUrls": "https://i.gkd.li/import/13855443"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
