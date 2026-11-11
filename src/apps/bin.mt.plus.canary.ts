// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "bin.mt.plus.canary",
  "name": "MT管理器Pro",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "bin.mt.plus.Main",
          "matches": "@[text=\"取消\"] + [text=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13561226"
        }
      ]
    }
  ]
} as any);
