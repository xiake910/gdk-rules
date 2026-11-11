// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.allinone.callerid",
  "name": "Showcaller",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"mys-content\"] > View > View > Button[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13696207"
        },
        {
          "key": 1,
          "matches": "[id=\"close-button\"] > View > View > Image",
          "snapshotUrls": "https://i.gkd.li/i/13696205"
        }
      ]
    }
  ]
} as any);
