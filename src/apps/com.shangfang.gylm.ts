// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shangfang.gylm",
  "name": "高佣联盟",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".mvp.ui.home.activity.UpdateActivityV2",
          "matches": "[vid=\"iv_upgrade_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13643599"
        }
      ]
    }
  ]
} as any);
