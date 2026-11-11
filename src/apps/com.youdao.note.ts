// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youdao.note",
  "name": "有道云笔记",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 1,
          "name": "首页上方卡片广告",
          "fastQuery": true,
          "activityIds": ".activity2.MainActivity",
          "matches": "[vid=\"recycle_view\"] + [vid=\"close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13379524"
        }
      ]
    }
  ]
} as any);
