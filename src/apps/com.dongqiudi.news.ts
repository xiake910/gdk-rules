// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dongqiudi.news",
  "name": "懂球帝",
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
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/20218520",
            "https://i.gkd.li/i/29968669"
          ]
        },
        {
          "key": 1,
          "matches": "@View[clickable=true] - [text=\"互动广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/20262129"
        },
        {
          "key": 2,
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"]",
          "snapshotUrls": "https://i.gkd.li/i/20262130"
        }
      ],
      "order": -10
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".DownloadActivity",
          "matches": "TextView[text*=\"新版本\"] +3 TextView[text=\"下次提醒\"]",
          "snapshotUrls": "https://i.gkd.li/i/12620586"
        }
      ]
    },
    {
      "key": 4,
      "name": "分段广告-首页信息流广告",
      "desc": "①点击x掉卡片广告 ②选一个反馈理由",
      "fastQuery": true,
      "activityIds": [
        ".MainActivity",
        "com.dongqiudi.data.MixActivity",
        ".NewsDetailActivity"
      ],
      "rules": [
        {
          "key": 1,
          "name": "①点击x掉",
          "matches": "[vid=\"feedback_close\" || vid=\"ads_download_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29957609",
            "https://i.gkd.li/i/29957589",
            "https://i.gkd.li/i/29958236",
            "https://i.gkd.li/i/29961281",
            "https://i.gkd.li/i/29965220"
          ]
        },
        {
          "key": 2,
          "name": "①x掉",
          "activityIds": ".NewsDetailActivity",
          "matches": "@ImageView < [visibleToUser=true] - LinearLayout > [text^=\"立即\" || text^=\"了解\" || text*=\"查看\" || text*=\"下载\" || text*=\"领取\" || text$=\"应用\" || text$=\"详情\" || text$=\"小程序\"][text.length<6]",
          "snapshotUrls": "https://i.gkd.li/i/29961284"
        },
        {
          "preKeys": [
            1,
            2
          ],
          "name": "②选一个反馈理由",
          "matches": "[text=\"诱导点击\" || text=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29958238",
            "https://i.gkd.li/i/29965222"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13260467"
        },
        {
          "key": 1,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] +(1,2) View[childCount=1] > Image[childCount=0][text=\"\"][width<60 && height<60]",
          "exampleUrls": "https://e.gkd.li/87e47cae-fa83-4d25-879c-728a1519ee55",
          "snapshotUrls": "https://i.gkd.li/i/20403710"
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告-数据页弹窗广告",
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 1,
          "name": "腾讯广告SDK",
          "fastQuery": true,
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/13626900"
        },
        {
          "key": 2,
          "name": "快手广告磁力智投SDK",
          "fastQuery": true,
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627105"
        },
        {
          "key": 3,
          "name": "字节广告穿山甲SDK-1",
          "matches": "View[text=\"反馈\"] -2 @View > Image",
          "snapshotUrls": "https://i.gkd.li/i/13627106"
        },
        {
          "key": 4,
          "name": "字节广告穿山甲SDK-2",
          "matches": "FrameLayout[desc^=\"webview-close\"] > View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12620588"
        }
      ]
    },
    {
      "key": 9,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"notification_button_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/81cea4de-9288-4ec8-97ea-7c4a9b19fd08",
          "snapshotUrls": "https://i.gkd.li/i/19666282"
        }
      ]
    },
    {
      "key": 1,
      "name": "青少年模式",
      "activityIds": "com.dongqiudi.news.MainActivity",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[text*=\"青少年模式\"] + [id=\"com.dongqiudi.news:id/tv_know\"]",
      "snapshotUrls": "https://i.gkd.li/import/12621980",
      "enable": false
    },
    {
      "enable": false,
      "key": 3000,
      "name": "局部广告-首页信息流广告",
      "desc": "点击广告卡片x关闭按钮-关闭反馈理由弹窗",
      "activityIds": "com.dongqiudi.news.MainActivity",
      "fastQuery": true,
      "rules": [
        {
          "preKeys": [
            1,
            2
          ],
          "name": "首页信息流广告-反馈理由",
          "matches": "TextView[text=\"诱导点击\"][id=\"com.dongqiudi.news:id/text_item\"]",
          "snapshotUrls": "https://i.gkd.li/import/12620656"
        },
        {
          "key": 1,
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_label\"] +(n) ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12620654"
        },
        {
          "key": 2,
          "matches": "TextView[id=\"com.dongqiudi.news:id/ads_title\"] +(2) RelativeLayout > ImageView[id=\"com.dongqiudi.news:id/feedback_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12620788"
        }
      ]
    },
    {
      "key": 3001,
      "name": "全屏广告-首页-广告弹窗",
      "desc": "点击底部【x】关闭",
      "activityIds": "com.dongqiudi.news.MainActivity",
      "fastQuery": true,
      "rules": "[id=\"com.dongqiudi.news:id/iv_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13260467",
      "enable": false
    }
  ]
} as any);
