// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.guodongbaohe.app",
  "name": "果冻宝盒",
  "groups": [
    {
      "key": 6,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.AdvertisementTwoActivity",
          "matches": "LinearLayout[vid=\"close_dialog_lv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13577877"
        }
      ]
    }
  ]
} as any);
