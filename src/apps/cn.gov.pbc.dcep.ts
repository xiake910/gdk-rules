// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.gov.pbc.dcep",
  "name": "数字人民币",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.activity.MainActivity",
          "matches": "[vid=\"upgrade_dialog_cancel\"][!(text=\"退出应用\")]",
          "snapshotUrls": "https://i.gkd.li/i/13840408",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17607391"
        }
      ]
    }
  ]
} as any);
