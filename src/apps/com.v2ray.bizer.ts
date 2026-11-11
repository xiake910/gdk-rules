// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.v2ray.bizer",
  "name": "灯塔加速器",
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
          "matches": "@[vid=\"close\"] - [text*=\"公告\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6dde3a1f-0428-4110-918e-f4b5853d5c04",
          "snapshotUrls": "https://i.gkd.li/i/23834355"
        }
      ]
    }
  ]
} as any);
