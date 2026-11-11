// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cloudpower.netsale.activity",
  "name": "中国人保",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击下次再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.picc.aasipods.module.versionupdate.controller.VersionUpdateActivity",
          "matches": "[vid=\"tvw_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14005533"
        }
      ]
    }
  ]
} as any);
