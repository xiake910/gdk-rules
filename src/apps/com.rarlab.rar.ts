// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.rarlab.rar",
  "name": "RAR",
  "groups": [
    {
      "key": 10,
      "name": "全屏广告-订购 RAR 弹窗",
      "desc": "点击[放弃]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[text=\"订购\" || text=\"訂閱\"] + [text=\"放弃\" || text=\"解除\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12781596",
            "https://i.gkd.li/i/15801328"
          ]
        }
      ]
    }
  ]
} as any);
