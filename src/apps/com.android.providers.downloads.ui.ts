// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.providers.downloads.ui",
  "name": "下载管理",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".DownloadList",
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13631769"
        }
      ],
      "enable": false
    }
  ]
} as any);
