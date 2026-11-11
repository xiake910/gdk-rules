// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.steampy.app",
  "name": "SteamPY",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"pyAdLayout\"] > [vid=\"count_down_view\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26231218"
        }
      ],
      "order": -10
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.common.MainActivity",
          "matches": "@[vid=\"imgClose\"] - RelativeLayout [vid=\"tv_update\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695519"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-首页优惠券弹窗自动点击领取/使用",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".activity.common.MainActivity",
          "matches": "[vid=\"coupon_right\"]",
          "exampleUrls": [
            "https://e.gkd.li/2e87decb-54ba-4f8b-9330-f037c220d2d9",
            "https://e.gkd.li/b2e256c2-c606-430c-afa9-3cd02f4d56c2"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16860018",
            "https://i.gkd.li/i/16860017"
          ]
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-版本更新",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.steampy.app.activity.common.MainActivity",
      "rules": "@[id=\"com.steampy.app:id/imgClose\"] - RelativeLayout [id=\"com.steampy.app:id/tv_update\"]",
      "snapshotUrls": "https://i.gkd.li/import/13695519",
      "enable": false
    }
  ]
} as any);
