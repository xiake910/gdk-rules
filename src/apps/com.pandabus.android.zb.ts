// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pandabus.android.zb",
  "name": "淄博出行",
  "groups": [
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"iv_native_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/13400177"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[id=\"com.pandabus.android.zb:id/iv_native_dislike\"]",
      "snapshotUrls": "https://i.gkd.li/import/13400177",
      "enable": false
    }
  ]
} as any);
