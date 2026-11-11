// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
      ]
    }
  ]
} as any);
