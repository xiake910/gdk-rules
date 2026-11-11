// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.eastmoney.android.berlin",
  "name": "东方财富",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "matches": "[vid=\"tv_update_next_time\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706070"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "matches": "[vid=\"iv_single_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/286da57c-7a7f-4668-aea8-7cbff63e8499",
          "snapshotUrls": "https://i.gkd.li/i/23281792"
        }
      ]
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "matches": "[vid=\"push_on_notify_delete\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706065"
        }
      ]
    },
    {
      "enable": false,
      "key": 3000,
      "name": "权限提示-请求通知权限提示信息",
      "activityIds": [
        "com.eastmoney.android.module.launcher.internal.home.HomeActivity"
      ],
      "rules": "[id=\"com.eastmoney.android.berlin:id/push_on_notify_on\"] + [id=\"com.eastmoney.android.berlin:id/push_on_notify_delete\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12706065"
      ]
    }
  ]
} as any);
