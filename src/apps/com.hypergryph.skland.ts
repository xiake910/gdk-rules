// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hypergryph.skland",
  "name": "森空岛",
  "groups": [
    {
      "key": 1,
      "name": "青少年模式",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.hypergryph.skland.MainActivity"
      ],
      "rules": "[text*=\"青少年模式\"] +n [text=\"我知道了\"]",
      "snapshotUrls": "https://i.gkd.li/import/13197012",
      "enable": false
    }
  ]
} as any);
