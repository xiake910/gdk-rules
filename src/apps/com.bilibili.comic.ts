// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.bilibili.comic",
  "name": "哔哩哔哩漫画",
  "groups": [
    {
      "key": 1,
      "name": "青少年模式",
      "fastQuery": true,
      "matchTime": 15000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.bilibili.comic.home.view.FlutterMainActivity"
      ],
      "rules": "[id=\"com.bilibili.comic:id/tv_know\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/13063676",
        "https://i.gkd.li/import/13262801"
      ],
      "enable": false
    }
  ]
} as any);
