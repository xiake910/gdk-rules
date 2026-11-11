// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.TuHu.android",
  "name": "途虎养车",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "matches": "@[vid=\"imgClose\"] - [vid=\"rlContent\"] > [vid=\"img_jump\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228818"
        }
      ]
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "matches": "[vid=\"imgClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13228796",
            "https://i.gkd.li/i/13256535"
          ]
        }
      ]
    }
  ]
} as any);
