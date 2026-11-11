// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pywm.fund",
  "name": "普益基金",
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
          "matches": "TextView[text=\"立即更新\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/import/13327271"
        }
      ],
      "enable": false
    }
  ]
} as any);
