// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sohu.inputmethod.sogou",
  "name": "搜狗输入法",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "matches": "@[clickable=true] > [text=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/d310d2a0-4795-421d-82da-f3855fb7288b",
          "snapshotUrls": "https://i.gkd.li/i/20138053"
        },
        {
          "key": 1,
          "fastQuery": true,
          "matches": "@[clickable=true][text^=\"跳过\"] - [text=\"广告\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/aa7e78f0-0cfe-490d-8d41-f3e41b906610",
          "snapshotUrls": "https://i.gkd.li/i/25897923"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
