// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.example.robortx.clousx6F",
  "name": "Clousx6",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "@[vid=\"iv_close\"] + * >2 [text=\"上一条\"]",
          "exampleUrls": "https://m.gkd.li/57941037/a59e4c30-29e3-4d7e-9c05-f7e844ff6ac3",
          "snapshotUrls": "https://i.gkd.li/i/14571096"
        }
      ]
    }
  ]
} as any);
