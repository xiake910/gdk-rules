// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hpbr.directhires",
  "name": "店长直聘",
  "groups": [
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[id=\"com.hpbr.directhires:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13774242"
        }
      ],
      "enable": false
    }
  ]
} as any);
