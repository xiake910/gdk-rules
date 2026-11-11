// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ukids.client.phone",
  "name": "小小优趣",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".parent.ParentClientHomeActivity",
          "matches": "[vid=\"dialog_dismiss_btn_two\"]",
          "snapshotUrls": "https://i.gkd.li/i/13400238"
        }
      ]
    }
  ]
} as any);
