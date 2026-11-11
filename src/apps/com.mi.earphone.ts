// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mi.earphone",
  "name": "小米耳机",
  "groups": [
    {
      "key": 1,
      "name": "评价提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "@[vid=\"close_iv\"] + [text=\"喜欢“小米耳机”吗？\"]",
          "snapshotUrls": "https://i.gkd.li/i/23263036"
        }
      ]
    }
  ]
} as any);
