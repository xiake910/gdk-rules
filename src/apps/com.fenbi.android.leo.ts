// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": false
    },
    {
      "enable": true,
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
