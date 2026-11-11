// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.webank.wemoney",
  "name": "微众银行",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[desc=\"关闭\"][clickable=true] +2 Button > [text^=\"立即\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/320f2c46-fd24-45b6-8031-8a4bae46558b",
          "snapshotUrls": "https://i.gkd.li/i/23280589"
        }
      ],
      "enable": false
    }
  ]
} as any);
