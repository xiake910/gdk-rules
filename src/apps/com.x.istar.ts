// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.x.istar",
  "name": "观星",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".view.main.MainActivity",
          "matches": "[text=\"关闭广告\"][vid=\"btn_negative\"]",
          "snapshotUrls": "https://i.gkd.li/i/13974606"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-开屏广告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.x.istar.view.main.MainActivity",
      "rules": "[text=\"关闭广告\"][vid=\"btn_negative\"]",
      "snapshotUrls": "https://i.gkd.li/import/13974606",
      "enable": false
    }
  ]
} as any);
