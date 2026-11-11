// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tvbc.maiduidui",
  "name": "埋堆堆",
  "groups": [
    {
      "key": 1,
      "name": "青少年模式",
      "fastQuery": true,
      "activityIds": "com.tvbc.maiduidui.MainHomeActivity",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": "@[vid=\"tv_ok\"] - [vid=\"tv_open_child_model\"]",
      "snapshotUrls": "https://i.gkd.li/import/13847804",
      "enable": false
    }
  ]
} as any);
