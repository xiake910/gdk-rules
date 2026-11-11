// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.oppo.store",
  "name": "OPPO商城",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击下次再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@[text=\"下次再说\"] -3 [text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13295202"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "ImageView[vid=\"dialog_delete\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13295201"
        }
      ]
    }
  ]
} as any);
