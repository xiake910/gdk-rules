// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fongmi.android.tv",
  "name": "影视",
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
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[vid=\"buttonPanel\"] >2 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14035154"
        }
      ],
      "enable": false
    }
  ]
} as any);
