// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lanjinger.choiassociatedpress",
  "name": "财联社",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.OperateActivity",
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13749206"
        }
      ]
    }
  ]
} as any);
