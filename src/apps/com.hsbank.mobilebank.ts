// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hsbank.mobilebank",
  "name": "徽商银行",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]"
        },
        {
          "key": 1,
          "matches": "[vid=\"tv_skip\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/31823929"
        }
      ],
      "order": -10
    }
  ]
} as any);
