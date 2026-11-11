// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jin10",
  "name": "金十数据",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".lgd.update.UpdateActivity",
          "matches": "@[vid=\"update_cancel\"] + [vid=\"iv_pic\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706043"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".lgd.biz.MainActivity",
          "matches": "[id$=\"iv_body\" || id$=\"iv_pic\" || vid=\"body_ad\"] <n [visibleToUser=true] > [vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706045",
            "https://i.gkd.li/i/12706047",
            "https://i.gkd.li/i/31375320"
          ]
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-会员页面顶部广告",
      "rules": [
        {
          "activityIds": ".lgd.biz.MainActivity",
          "matches": "[vid=\"iv_header\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706051"
        }
      ]
    }
  ]
} as any);
