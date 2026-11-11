// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.example.pptv",
  "name": "人人视频",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13669401"
        },
        {
          "key": 1,
          "matches": "[vid=\"view_count_shake\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761160"
        }
      ],
      "order": -10
    },
    {
      "key": 1,
      "name": "青少年模式",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": "@[text=\"我知道了\"] - * > [text=\"未成年模式\"]",
      "snapshotUrls": "https://i.gkd.li/import/13761159",
      "enable": false
    }
  ]
} as any);
