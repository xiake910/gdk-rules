// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
