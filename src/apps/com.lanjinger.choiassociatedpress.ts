// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lanjinger.choiassociatedpress",
  "name": "财联社",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.OperateActivity",
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13749206"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.lanjinger.choiassociatedpress.main.OperateActivity",
      "rules": "@ImageView[id$=\"iv_back\"][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/13749206"
    }
  ]
} as any);
