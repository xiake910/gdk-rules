// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.newapp",
  "name": "文心一言",
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
          "activityIds": ".update.UpdateAlertActivity",
          "matches": "[text=\"立即更新\"] + [text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360280"
        }
      ]
    }
  ]
} as any);
