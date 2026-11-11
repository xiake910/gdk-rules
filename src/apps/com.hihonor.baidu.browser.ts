// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.baidu.browser",
  "name": "百度浏览器(荣耀版)",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "@[text*=\"跳过\"][clickable=true] <n LinearLayout[childCount>1] +2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/32739487"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
