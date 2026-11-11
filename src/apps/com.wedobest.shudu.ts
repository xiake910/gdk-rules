// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wedobest.shudu",
  "name": "数独",
  "groups": [
    {
      "key": 1,
      "name": "局部广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".GameAct",
          "matches": "@Button[clickable=true] +2 [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24967577"
        }
      ]
    }
  ]
} as any);
