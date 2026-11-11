// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.samsclub.app",
  "name": "山姆会员商店",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "@ImageView[clickable=true] <2 [vid=\"advertising_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609106"
        },
        {
          "key": 1,
          "matches": "@ImageView[vid=\"close_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/15879369"
        }
      ],
      "order": -10
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-底部横幅广告",
      "desc": "x掉[亲友卡待赠送]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"fragment_home_window_delete_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-关闭「您有一张亲友卡待赠送」通知条",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.samsclub.app.ui.MainActivity",
          "matches": "[id=\"cn.samsclub.app:id/fragment_home_window_delete_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13609113"
        }
      ]
    },
    {
      "key": 3001,
      "name": "权限提示-系统位置服务未打开",
      "fastQuery": true,
      "activityIds": "cn.samsclub.app.ui.MainActivity",
      "rules": [
        {
          "matches": [
            "[text=\"系统位置服务未打开\"]",
            "[id=\"cn.samsclub.app:id/tips_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13609113"
        }
      ],
      "enable": false
    },
    {
      "key": 3002,
      "name": "局部广告-底部[您有一张亲友卡待赠送]通知条",
      "fastQuery": true,
      "activityIds": ".ui.MainActivity",
      "rules": [
        {
          "matches": "@[id=\"cn.samsclub.app:id/fragment_home_window_delete_iv\"] - [text=\"赠送亲友卡\"]",
          "snapshotUrls": "https://i.gkd.li/import/13609113"
        }
      ],
      "enable": false
    }
  ]
} as any);
