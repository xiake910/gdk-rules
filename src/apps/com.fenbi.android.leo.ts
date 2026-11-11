// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fenbi.android.leo",
  "name": "小猿口算",
  "groups": [
    {
      "key": 1,
      "name": "评价提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".imgsearch.sdk.activity.NewCheckCameraActivity",
          "matches": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13226140"
        }
      ]
    },
    {
      "enable": false,
      "key": 3000,
      "name": "全屏广告-评分弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": "com.fenbi.android.leo.imgsearch.sdk.activity.NewCheckCameraActivity",
      "rules": "@[text=\"残忍拒绝\"] + [text*=\"好评\"][text.length<=10]",
      "snapshotUrls": "https://i.gkd.li/import/13226140"
    }
  ]
} as any);
