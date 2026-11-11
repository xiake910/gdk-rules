// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.mkey",
  "name": "网易将军令",
  "groups": [
    {
      "key": 2,
      "name": "其他-一键迁移至新版将军令",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.NtSecActivity",
          "matches": "[vid=\"tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13421302"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-一键迁移至新版将军令",
      "matchTime": 10000,
      "fastQuery": true,
      "activityIds": "com.netease.mkey.activity.NtSecActivity",
      "rules": "[id=\"com.netease.mkey:id/tv_cancel\"]",
      "snapshotUrls": "https://i.gkd.li/import/13421302",
      "enable": false
    }
  ]
} as any);
