// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.soundrecorder",
  "name": "录音机",
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
          "activityIds": ".RecordPreviewActivity",
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/14140552"
        }
      ]
    }
  ]
} as any);
