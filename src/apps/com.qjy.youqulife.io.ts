// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qjy.youqulife.io",
  "name": "MINO 4K",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 1,
          "name": "快手广告",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": [
            "[text=\"广告\"] ",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13378653"
        }
      ]
    }
  ]
} as any);
