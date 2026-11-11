// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xunlei.downloadprovider",
  "name": "迅雷",
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
          "excludeActivityIds": ".search.ui.search.SearchOperateActivity",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15048443",
            "https://i.gkd.li/i/15048416"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16388942"
        },
        {
          "key": 1,
          "position": {
            "left": "width * 0.9055",
            "top": "width * 0.1611"
          },
          "excludeMatches": "[text*=\"跳过\"]",
          "matches": "[vid=\"native_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/15048354",
          "excludeSnapshotUrls": "https://i.gkd.li/i/15048376"
        },
        {
          "key": 2,
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24539634"
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 1,
      "name": "分段广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": [
            ".frame.MainTabActivity",
            ".download.taskdetails.newui.DownloadDetailsActivity"
          ],
          "matches": "[vid=\"hermes_ad_banner_negative\" || vid=\"close_iv\"  || vid=\"btn_ad_feedback\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/95d56e24-3223-4112-9222-de6d489aa79b",
          "snapshotUrls": [
            "https://i.gkd.li/i/23762793",
            "https://i.gkd.li/i/23845066"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "activityIds": [
            ".frame.MainTabActivity",
            ".download.taskdetails.newui.DownloadDetailsActivity"
          ],
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/490bd679-86a5-432e-b0de-427da5513484",
          "snapshotUrls": [
            "https://i.gkd.li/i/23762972",
            "https://i.gkd.li/i/23845065"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": ".frame.MainTabActivity",
          "matches": "[vid=\"close_btn\" || id=\"com.noah.dycsdk.dynamic_sdk:id/noah_interstitial_close_button\" || text=\"关闭\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/71c2dc44-a976-4910-8e44-26e39865406e",
          "snapshotUrls": [
            "https://i.gkd.li/i/16388890",
            "https://i.gkd.li/i/25843616",
            "https://i.gkd.li/i/25902800"
          ]
        },
        {
          "key": 1,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12868667",
            "https://i.gkd.li/i/12881946",
            "https://i.gkd.li/i/13295179"
          ]
        },
        {
          "key": 2,
          "fastQuery": true,
          "activityIds": [
            ".frame.MainTabActivity",
            ".launch.LaunchActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882132",
            "https://i.gkd.li/i/12901374",
            "https://i.gkd.li/i/12882237"
          ]
        },
        {
          "key": 3,
          "fastQuery": true,
          "activityIds": "com.xunlei.web.XLWebViewActivity$XLWebViewActivityImpl",
          "matches": "[text$=\"专属惊喜价\"] + View > @[desc^=\"javascript\"][clickable=true][childCount=0][width<120&&height<120][visibleToUser=true] <<n [vid=\"refreshLayout\"]",
          "exampleUrls": "https://e.gkd.li/ade9ca8a-b7a5-4a22-8c1f-d14423a34136",
          "snapshotUrls": [
            "https://i.gkd.li/i/16914136",
            "https://i.gkd.li/i/23833175",
            "https://i.gkd.li/i/23845039"
          ]
        },
        {
          "key": 4,
          "fastQuery": true,
          "activityIds": ".download.center.DownloadCenterActivity",
          "matches": [
            "[text=\"开通超级会员\"]",
            "[vid=\"close_btn\"]"
          ],
          "exampleUrls": "https://e.gkd.li/6448cedc-2bad-4aa5-846c-9ad82c310545",
          "snapshotUrls": "https://i.gkd.li/i/17658831"
        },
        {
          "key": 5,
          "fastQuery": true,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "@ImageView[childCount=0] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] +2 ViewGroup >3 [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23762955",
            "https://i.gkd.li/i/24541418"
          ]
        },
        {
          "key": 6,
          "activityIds": "com.byazt.fl.Stub_Standard_Portrait_Activity",
          "matches": "@[text*=\"跳过\"] <n * - [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/25843756"
        }
      ],
      "enable": false
    },
    {
      "key": 6,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xunlei.upgrade.XUpgradeActivity",
          "matches": "[vid=\"x_upgrade_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228920"
        }
      ],
      "enable": false
    },
    {
      "key": 12,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": ".frame.MainTabActivity",
          "matches": "[text=\"立即领取\" || text=\"点击领取\" || text^=\"此云盘为您的私人云盘\"] + [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882939",
            "https://i.gkd.li/i/15048352",
            "https://i.gkd.li/i/15048355",
            "https://i.gkd.li/i/15048357"
          ]
        },
        {
          "key": 1,
          "fastQuery": true,
          "activityIds": ".search.ui.search.SearchOperateActivity",
          "matches": "[vid=\"search_banner_ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/d9e25fc3-249f-4fb9-8606-606ed0c9c893",
          "snapshotUrls": "https://i.gkd.li/i/17725350"
        },
        {
          "key": 2,
          "fastQuery": true,
          "activityIds": ".frame.MainTabActivity",
          "matches": "[vid=\"home_flow_item_close_iv\" || vid=\"ad_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23762842",
            "https://i.gkd.li/i/23762864"
          ]
        },
        {
          "key": 3,
          "fastQuery": true,
          "activityIds": ".xpan.pan.activity.XPanFileBrowserActivity",
          "matches": "[vid=\"btn_ad_feedback\"]",
          "snapshotUrls": "https://i.gkd.li/i/23795248"
        }
      ],
      "enable": false
    },
    {
      "key": 13,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xunlei.uikit.activity.TransformActivity",
          "matches": [
            "[text=\"是否打开系统通知\"]",
            "[vid=\"btn_close\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/bf1ee4f5-126c-46c7-bac1-5e41ec4546e3",
          "snapshotUrls": "https://i.gkd.li/i/15322046"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-视频详情页广告",
      "rules": [
        {
          "key": 0,
          "name": "点击右上角x按钮",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "snapshotUrls": "https://i.gkd.li/import/12707701"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
            "com.xunlei.downloadprovider.feedback.view"
          ],
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/feedback_not_interested_layout\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13625418",
            "https://i.gkd.li/import/12707717",
            "https://i.gkd.li/import/12707702"
          ]
        },
        {
          "key": 2,
          "name": "点击关闭按钮",
          "activityIds": "com.xunlei.downloadprovider.feedback.view",
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_ima_skip\"]",
          "snapshotUrls": "https://i.gkd.li/import/12882988"
        },
        {
          "key": 3,
          "name": "点击右上角x按钮2",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/play_detail_ad_title\"] + [id=\"com.xunlei.downloadprovider:id/close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13228423"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-视频详情-直播推荐",
      "desc": "自动点击【减少推荐】",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/title_tv\"] + [id=\"com.xunlei.downloadprovider:id/more\"]",
          "snapshotUrls": "https://i.gkd.li/import/12707701"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "activityIds": "com.xunlei.downloadprovider.download.center.newcenter",
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/import/12707710"
        }
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3001,
      "name": "全屏广告-应用内广告弹窗",
      "desc": "⚠ 此规则容易误触，因此默认关闭。",
      "rules": [
        {
          "key": 0,
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "matches": "@[text=\"关闭\"] +n * >n [text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12868648",
            "https://i.gkd.li/import/12879372",
            "https://i.gkd.li/import/12882366",
            "https://i.gkd.li/import/12892871",
            "https://i.gkd.li/import/13799878"
          ]
        },
        {
          "key": 10,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image[text=\"\"] < @View + View +n View > View > TextView[text$=\"广告\"][text.length<=10]",
          "actionDelay": 1000,
          "snapshotUrls": [
            "https://i.gkd.li/import/12868667",
            "https://i.gkd.li/import/12881946",
            "https://i.gkd.li/import/13295179"
          ]
        },
        {
          "key": 20,
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/import/12882132",
            "https://i.gkd.li/import/12901374"
          ]
        },
        {
          "key": 21,
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12882166"
        },
        {
          "key": 22,
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12882237"
        },
        {
          "key": 23,
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "snapshotUrls": "https://i.gkd.li/import/13597068"
        },
        {
          "key": 30,
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "ImageView < @ViewGroup[visibleToUser=true] < ViewGroup +n ViewGroup > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12882199",
            "https://i.gkd.li/import/12881911",
            "https://i.gkd.li/import/12892912",
            "https://i.gkd.li/import/12881976"
          ]
        },
        {
          "key": 31,
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup >n [text=\"跳过\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12881976"
        },
        {
          "key": 32,
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": [
            "ViewGroup[childCount=2] > ImageView + TextView[text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13761275"
        },
        {
          "key": 2,
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "TextView[text=\"广告\"] <n ViewGroup -2 ViewGroup > @ViewGroup",
          "snapshotUrls": "https://i.gkd.li/import/12879452"
        }
      ]
    },
    {
      "enable": false,
      "key": 4,
      "name": "局部广告-【下载页】广告卡片",
      "desc": "需选二次弹窗关闭原因",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "name": "点击更多【···】",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_more\"]",
          "snapshotUrls": "https://i.gkd.li/import/12881865"
        },
        {
          "key": 1,
          "name": "点击【x】",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "[id=\"com.xunlei.downloadprovider:id/btn_ad_feedback\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12892893",
            "https://i.gkd.li/import/12901395"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "关闭原因选【减少推荐】",
          "key": 2,
          "activityIds": [
            "com.xunlei.downloadprovider.download.center.newcenter",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/128818775",
            "https://i.gkd.li/import/13198070",
            "https://i.gkd.li/import/13484249"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-搜索页面-顶部banner广告",
      "fastQuery": true,
      "activityIds": "com.xunlei.downloadprovider.search.ui.search.SearchOperateActivity",
      "rules": "[id=\"com.xunlei.downloadprovider:id/search_banner_ad_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12882892",
      "enable": false
    },
    {
      "key": 10,
      "name": "全屏广告-会员续费广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "name": "【我的】",
          "activityIds": [
            "com.xunlei.downloadprovider.homepage.member",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "matches": "@[id=\"com.xunlei.downloadprovider:id/close_btn\"] - LinearLayout [text=\"您的会员已过期\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12707698",
            "https://i.gkd.li/import/13448909"
          ]
        },
        {
          "key": 1,
          "name": "【下载页】1",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[id=\"com.xunlei.downloadprovider:id/all_picture_image\"] + [id=\"com.xunlei.downloadprovider:id/close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/import/12882928"
        },
        {
          "key": 2,
          "name": "【下载页】2",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[text=\"立即开通\"] + [id=\"com.xunlei.downloadprovider:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12882939"
        },
        {
          "key": 3,
          "name": "【首页】",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "matches": "[text=\"您的会员已过期\"] < LinearLayout +n [id=\"com.xunlei.downloadprovider:id/touch_bottom_bar_bubble_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13259268"
        }
      ],
      "enable": false
    }
  ]
} as any);
