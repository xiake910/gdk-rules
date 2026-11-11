// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.health",
  "name": "荣耀运动健康",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"iv_close_filled\"]",
          "snapshotUrls": "https://i.gkd.li/i/13759407"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"btn_close\"][desc=\"关闭弹窗\"]",
          "exampleUrls": "https://e.gkd.li/1ab101bd-59cb-46c0-bbb1-7a0a9dccf79a",
          "snapshotUrls": "https://i.gkd.li/i/16454150"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-卡片式广告",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.hihonor.health.main.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.hihonor.health:id/iv_close_filled\"]",
          "snapshotUrls": "https://i.gkd.li/import/13759407"
        }
      ],
      "enable": false
    }
  ]
} as any);
