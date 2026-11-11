// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dongao.kaoqian.phone",
  "name": "会计云课堂",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"tv_welcome_guide\"]",
          "snapshotUrls": "https://i.gkd.li/i/14809185"
        }
      ],
      "order": -10
    }
  ]
} as any);
