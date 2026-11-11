// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      "order": -10
    }
  ]
} as any);
