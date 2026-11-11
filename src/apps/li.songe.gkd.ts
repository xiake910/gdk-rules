// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "li.songe.gkd",
  "name": "GKD",
  "groups": [
    {
      "key": 1,
      "name": "功能类-删除快照二次提示",
      "desc": "二次确认?-确定",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true] -3 [text=\"删除快照\"] <<6 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/25569635"
        }
      ]
    }
  ]
} as any);
