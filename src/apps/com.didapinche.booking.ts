// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.didapinche.booking",
  "name": "嘀嗒出行",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "@View[clickable=true] <n * <2 * < [vid=\"flCSJAdContainer\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13988957",
            "https://i.gkd.li/import/13989178"
          ]
        }
      ],
      "order": -10
    }
  ]
} as any);
