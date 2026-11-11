// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.adguard.android",
  "name": "AdGuard",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动开启保护",
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[id=\"com.adguard.android:id/main_switch\"][text=\"主保护开关已关闭\"]",
          "snapshotUrls": "https://i.gkd.li/import/16346724",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20513646"
        }
      ],
      "enable": false
    }
  ]
} as any);
