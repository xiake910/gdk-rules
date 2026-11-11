// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sainti.eduread",
  "name": "出口成章",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.FrActivity",
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/38334f57-2796-48a7-9000-76de3e8221ed",
          "snapshotUrls": "https://i.gkd.li/i/18392760"
        }
      ]
    }
  ]
} as any);
