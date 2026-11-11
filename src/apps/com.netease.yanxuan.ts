// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.yanxuan",
  "name": "网易严选",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".module.mainpage.activity.MainPageActivity",
          "matches": "[vid=\"trans_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840641"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-弹窗广告",
      "activityIds": "com.netease.yanxuan.module.mainpage.activity.MainPageActivity",
      "rules": "[id=\"com.netease.yanxuan:id/trans_cancel\"]",
      "snapshotUrls": "https://i.gkd.li/import/12840641",
      "enable": false
    }
  ]
} as any);
