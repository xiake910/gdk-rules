// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.greenpoint.android.mc10086.activity",
  "name": "中国移动",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16335136"
        },
        {
          "key": 1,
          "position": {
            "left": "width * 0.8731",
            "top": "width * 0.1352"
          },
          "matches": "@FrameLayout[childCount=2] > [vid=\"ll_top_right\"][childCount=0]",
          "exampleUrls": "https://e.gkd.li/6fca95f1-d672-4d1d-bcf5-e71f1865dd52",
          "snapshotUrls": "https://i.gkd.li/i/20903074",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16335136"
        }
      ],
      "order": -10,
      "enable": true
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
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[text=\"暂不更新\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/130e0c2e-f568-4a96-9c06-9876a21e0466",
          "snapshotUrls": "https://i.gkd.li/i/18271745"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "@[vid=\"close_btn\" || vid=\"iv_close_top\"] <n LinearLayout >2 [vid=\"ad_image\" || vid=\"ll_ad_logo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662361",
            "https://i.gkd.li/i/31612036"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "desc": "请求推送通知弹窗，点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.mc10086.cmcc.base.StartPageActivity",
          "matches": [
            "[text*=\"开启推送通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13327880"
        },
        {
          "key": 1,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[text=\"授权提醒\"] +3 [text=\"拒绝\"]",
          "snapshotUrls": "https://i.gkd.li/i/13775652"
        }
      ],
      "enable": false
    },
    {
      "key": 11,
      "name": "权限提示-请求获取剪贴板权限弹窗",
      "desc": "请求获取剪贴板权限弹窗，点击不允许",
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.mc10086.cmcc.view.tabs.AppTabFragment",
        "com.mc10086.cmcc.base.StartPageActivity"
      ],
      "rules": [
        {
          "matches": "[text*=\"获取您的\"] < LinearLayout +(2) LinearLayout >(2) [text=\"不允许\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662251",
            "https://i.gkd.li/i/13775651",
            "https://i.gkd.li/i/15944173"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 12,
      "name": "局部广告-右侧悬浮小图标",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "actionCd": 300,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[vid=\"close_btn\" || vid=\"close_btn_bottom\" || vid=\"cmcc_digital_delete_float_icon_ll\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662265",
            "https://i.gkd.li/i/14570369",
            "https://i.gkd.li/i/25768816"
          ],
          "exampleUrls": [
            "https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c",
            "https://e.gkd.li/56c11ab7-227f-4b35-a2e0-8763dd557f69"
          ]
        },
        {
          "key": 1,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[vid=\"tab_ai_tag\"] >2 [vid=\"ai_floatingBar_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/25768547",
          "exampleUrls": "https://e.gkd.li/c8c018e9-4082-43f2-8d6d-98bc99bd4806"
        },
        {
          "key": 2,
          "activityIds": "com.cmccit.webview.ac.CommonHtml5Activity",
          "matches": "@Image[clickable=true][text!=null] <<3 WebView[text=\"余量查询\"] <<2 [vid=\"patmentwebview\"]",
          "exampleUrls": "https://m.gkd.li/57941037/69c6bf73-d901-4816-a9da-e4bcb0f4b9c6",
          "snapshotUrls": "https://i.gkd.li/i/14738550"
        }
      ],
      "enable": false
    },
    {
      "key": 13,
      "name": "评价提示-请求好评弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "@[vid=\"close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/12662345"
        }
      ],
      "enable": false
    },
    {
      "key": 14,
      "name": "权限提示-通讯录权限申请弹窗",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.cmccit.paycenter.PayCenterActivity",
          "matches": [
            "[text=\"通讯录权限申请\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://e.gkd.li/7d332325-497f-47a4-a322-729ffa5dd121",
          "snapshotUrls": "https://i.gkd.li/i/16369235"
        }
      ],
      "enable": false
    },
    {
      "key": 15,
      "name": "权限提示-定位权限",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": [
            "[text^=\"位置权限\" || text$=\"定位权限\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23445705"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-关闭更新弹窗",
      "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
      "snapshotUrls": "https://i.gkd.li/import/12534264",
      "rules": "Button[text=\"以后再说\"][id^=\"com.greenpoint.android.mc10086.activity:id/dialog_btn\"]",
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": [
        "com.mc10086.cmcc.view.tabs.AppTabFragment"
      ],
      "rules": [
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/ad_image\"] < RelativeLayout + [id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662361"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3002,
      "name": "全屏广告-请求推送通知弹窗",
      "desc": "请求推送通知弹窗，点击取消",
      "activityIds": "com.mc10086.cmcc.base.StartPageActivity",
      "rules": [
        {
          "matches": "[text*=\"开启推送通知\"] +(2) LinearLayout > [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662213",
            "https://i.gkd.li/import/13327880"
          ]
        },
        {
          "fastQuery": true,
          "matches": "[text=\"授权提醒\"] +3 [text=\"拒绝\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13775652"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3003,
      "name": "全屏广告-请求获取剪贴板权限弹窗",
      "desc": "请求获取剪贴板权限弹窗，点击不允许",
      "activityIds": [
        "com.mc10086.cmcc.view.tabs.AppTabFragment"
      ],
      "rules": [
        {
          "matches": "[text*=\"获取您的\"] < LinearLayout +(2) LinearLayout >(2) [text=\"不允许\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662251",
            "https://i.gkd.li/import/13775651"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3004,
      "name": "全屏广告-请求好评弹窗",
      "activityIds": [
        "com.mc10086.cmcc.view.tabs.AppTabFragment"
      ],
      "rules": [
        {
          "matches": "@[id=\"com.greenpoint.android.mc10086.activity:id/close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662345"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
