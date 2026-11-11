// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.aiwu.market",
  "name": "爱吾游戏宝盒",
  "groups": [
    {
      "key": 1,
      "name": "青少年模式",
      "desc": "点击[我知道了]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.activity.NewHomeActivity",
          "matches": "[vid=\"hintTextView2\"] + [vid=\"confirmView\"]",
          "snapshotUrls": "https://i.gkd.li/i/14032203"
        }
      ]
    }
  ]
} as any);
