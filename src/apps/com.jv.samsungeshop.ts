// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jv.samsungeshop",
  "name": "三星商城",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[desc=\"跳过\"][desc.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/65cbe48e-843e-4dba-a53b-5f6598a2b409",
          "snapshotUrls": "https://i.gkd.li/i/23288756"
        }
      ],
      "order": -10
    }
  ]
} as any);
