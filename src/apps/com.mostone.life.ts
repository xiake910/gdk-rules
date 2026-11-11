// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mostone.life",
  "name": "默往",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": "[id=\"android:id/content\"] >n FrameLayout[childCount=4] > View",
      "snapshotUrls": "https://i.gkd.li/import/13832104",
      "order": -10,
      "enable": true
    }
  ]
} as any);
