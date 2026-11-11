// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.m.mfood",
  "name": "mFood",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-浮窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.zdyl.mfood.ui.home.MainActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350787"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-浮窗廣告",
      "fastQuery": true,
      "activityIds": "com.zdyl.mfood.ui.home.MainActivity",
      "rules": "[id=\"com.m.mfood:id/close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13350787",
      "enable": false
    }
  ]
} as any);
