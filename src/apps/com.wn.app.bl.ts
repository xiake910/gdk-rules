// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wn.app.bl",
  "name": "布蕾4K",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "desc": "点击[我知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[desc=\"我知道了\"][clickable=true] + [desc=\"了解更多\"]",
          "exampleUrls": "https://m.gkd.li/57941037/405a7072-bae5-4db7-8743-608ab3750c1c",
          "snapshotUrls": "https://i.gkd.li/i/14228688"
        }
      ]
    }
  ]
} as any);
