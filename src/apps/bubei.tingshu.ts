// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "bubei.tingshu",
  "name": "懒人听书",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-悬浮广告",
      "rules": [
        {
          "key": 0,
          "name": "播放列表-右侧悬浮广告",
          "fastQuery": true,
          "activityIds": ".listen.book.detail.activity.DetailActivity",
          "matches": "[vid=\"closeIcon\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13348489"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".home.ui.HomeActivity",
          "matches": "[text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13545953"
        }
      ]
    }
  ]
} as any);
