// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.powersi.zhrs",
  "name": "智慧人社",
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
          "fastQuery": true,
          "matches": "[vid=\"tv_time\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/1cad6c38-5c76-4b5a-b350-bb9630221661",
          "snapshotUrls": "https://i.gkd.li/i/19746757"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
