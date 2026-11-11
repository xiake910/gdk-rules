// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.liuguang.down",
  "name": "流光助手",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][clickable=true][desc.length<10]"
        },
        {
          "key": 1,
          "matches": "[clickable=true][desc*=\"跳过\"][desc.length<10]",
          "snapshotUrls": "https://i.gkd.li/i/31147124"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
