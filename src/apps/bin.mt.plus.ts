// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "bin.mt.plus",
  "name": "MT管理器",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".Main",
          "matches": [
            "[text=\"更新\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/16050794"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示-优惠活动弹窗",
      "fastQuery": true,
      "matchTime": 14000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".Main",
          "matches": "[text*=\"活动\"] < * < LinearLayout +n ScrollView[index=parent.childCount.minus(1)] >(1,2) [text=\"开通会员\"] - [text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/28843042",
          "exampleUrls": "https://e.gkd.li/bdb813c7-2124-4e78-8a40-de37ec327021"
        }
      ]
    }
  ]
} as any);
