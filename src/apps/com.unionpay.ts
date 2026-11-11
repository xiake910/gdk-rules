// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.unionpay",
  "name": "云闪付",
  "groups": [
    {
      "key": 2,
      "name": "分段广告-支付完成界面卡片广告",
      "fastQuery": true,
      "activityIds": ".activity.react.UPActivityReactNative",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13070564"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "matches": "[text=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13070974"
        }
      ]
    },
    {
      "key": 9,
      "name": "局部广告-右侧悬浮广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.UPActivityMain",
          "matches": "[vid=\"frog_float\"] >2 [vid=\"close_view\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14586427",
            "https://i.gkd.li/i/31259720"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/0f4f6a7f-55ce-4f87-a4cb-97e9c7107359"
        }
      ]
    },
    {
      "key": 10,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".activity.UPActivityMain",
          "matches": "@[clickable=true] > [vid=\"locate_iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13634882",
            "https://i.gkd.li/i/31263858"
          ]
        },
        {
          "key": 1,
          "activityIds": [
            ".activity.UPActivityMain",
            ".base.UPDialog"
          ],
          "matches": [
            "[text*=\"访问您的位置信息\"]",
            "[text=\"不允许\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12695773",
            "https://i.gkd.li/i/14209001"
          ]
        }
      ]
    },
    {
      "key": 12,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".base.UPDialog",
          "matches": "[text=\"开启消息通知\"] < * + [vid=\"view_alert_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12695736"
        }
      ]
    },
    {
      "key": 13,
      "name": "全屏广告-天天签到-获得新勋章提示",
      "desc": "点击左上角返回",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".cordova.UPActivityCordovaWeb",
          "matches": "WebView[text=\"天天签到\"] TextView[text=\"炫耀一下\"] + TextView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13440341"
        }
      ]
    },
    {
      "key": 15,
      "name": "全屏广告-领取优惠弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".cordova.UPActivityCordovaWeb",
          "matches": "@View[clickable=true][text=\"关闭按钮\"] <<n [vid=\"view_content_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13848688"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": [
        "com.unionpay.base.UPDialog"
      ],
      "rules": [
        {
          "matches": "@[text=\"稍候再说\"] + [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/import/12727278"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-支付完成界面广告卡片",
      "fastQuery": true,
      "activityIds": "com.unionpay.activity.react.UPActivityReactNative",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/13070564"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "[text=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/13070974"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-定位权限悬浮弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.unionpay.activity.UPActivityMain",
      "rules": "[id=\"com.unionpay:id/view_locate_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13634882",
      "enable": false
    },
    {
      "enable": false,
      "key": 11,
      "name": "全屏广告-访问位置请求弹窗",
      "desc": "自动点击【不允许】。默认关闭，请手动开启",
      "fastQuery": true,
      "activityIds": [
        "com.unionpay.base.UPDialog"
      ],
      "rules": [
        {
          "matches": "[text$=\"想访问您的位置信息\"] < * +2 LinearLayout > [id=\"com.unionpay:id/btn_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12695773"
        }
      ]
    },
    {
      "enable": false,
      "key": 3002,
      "name": "全屏广告-开启消息通知弹窗",
      "desc": "默认关闭，请手动开启",
      "fastQuery": true,
      "activityIds": [
        "com.unionpay.base.UPDialog"
      ],
      "rules": [
        {
          "matches": "[text=\"开启消息通知\"] < * + [id=\"com.unionpay:id/view_alert_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12695736"
        }
      ]
    },
    {
      "key": 14,
      "name": "全屏广告-我的页面-广告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": "com.unionpay.activity.UPActivityMain",
      "rules": "[id=\"com.unionpay:id/container\"] + [id=\"com.unionpay:id/image\"][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/13440341",
      "enable": false
    }
  ]
} as any);
