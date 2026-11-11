// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dlmetro.app",
  "name": "大连交通e出行",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bwton.metro.tabindicator.business.MainTabActivity",
          "matches": "[vid=\"iv_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/78f79ab0-c224-40b8-9cae-e4a3366660db",
          "snapshotUrls": "https://i.gkd.li/i/15369247"
        }
      ]
    }
  ]
} as any);
