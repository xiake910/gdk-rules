// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.haokan",
  "name": "好看视频",
  "groups": [
    {
      "key": 3,
      "name": "青少年模式",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.baidu.haokan.app.activity.HomeActivity",
      "rules": "[text=\"进入青少年模式\"] + [text=\"我知道了\"]",
      "snapshotUrls": "https://i.gkd.li/import/13498610",
      "enable": false
    }
  ]
} as any);
