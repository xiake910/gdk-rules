// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.paokeji.yiqu",
  "name": "喵趣漫画",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "desc": "点击\"暂不\"",
      "matchTime": 10000,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": "com.aster.comic.app.view.bookdetails.BookdetailsActivity",
          "matches": "[vid=\"btnCancel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522",
          "snapshotUrls": "https://i.gkd.li/i/14140265"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] + @View[childCount=2] > [text*=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13829749",
            "https://i.gkd.li/i/14362119"
          ]
        },
        {
          "key": 1,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
            "com.aster.comic.app.view.MainActivity"
          ],
          "matches": "[text=\"反馈\"] -(2,4) @View[childCount=1][visibleToUser=true] > Image[childCount=0][text=\"\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13809578",
            "https://i.gkd.li/i/14717730",
            "https://i.gkd.li/i/16062358"
          ]
        },
        {
          "key": 2,
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@LinearLayout[clickable=true] - * > [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/14847142"
        },
        {
          "key": 3,
          "fastQuery": true,
          "activityIds": "com.aster.comic.app.view.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "snapshotUrls": "https://i.gkd.li/i/15374245"
        },
        {
          "key": 4,
          "activityIds": [
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "[text=\"反馈\"] + View[childCount=1] > Image[childCount=0][text=\"\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15711106",
            "https://i.gkd.li/i/17301509"
          ]
        },
        {
          "key": 5,
          "fastQuery": true,
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "matches": "@[id=\"com.kwad.dy.sdk:id/ksad_end_close_btn\"] - [text=\"免费获取\"]",
          "snapshotUrls": "https://i.gkd.li/i/16369203"
        },
        {
          "key": 6,
          "fastQuery": true,
          "activityIds": "com.kwad.sdk.api.proxy.app.KsRewardVideoActivity",
          "matches": "@ViewGroup[clickable=true] +3 ViewGroup > [text*=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/16401930"
        },
        {
          "key": 7,
          "name": "腾讯SDK-1",
          "fastQuery": true,
          "activityIds": [
            "com.aster.comic.app.view.MainActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830354",
            "https://i.gkd.li/i/13842966"
          ]
        },
        {
          "key": 8,
          "name": "腾讯SDK-2",
          "fastQuery": true,
          "activityIds": "com.aster.comic.app.view.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/15173845"
        },
        {
          "key": 9,
          "name": "字节SDK",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "FrameLayout[desc*=\"close\"] > View",
          "snapshotUrls": "https://i.gkd.li/i/13839519"
        },
        {
          "key": 10,
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down\"]",
          "snapshotUrls": "https://i.gkd.li/i/13810767"
        },
        {
          "key": 11,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image[childCount=0][text=\"\"] < @View + View > [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/13810150"
        },
        {
          "key": 12,
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "matches": [
            "[text*=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13809629"
        }
      ],
      "enable": true
    },
    {
      "key": 4,
      "name": "功能类-漫画页链接断开提示",
      "desc": "点击[点我重试]",
      "actionMaximum": 3,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.aster.comic.app.view.reader.ReaderActivity",
          "matches": "@[clickable=true] > [text=\"点我重试\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d71c73bb-289f-4205-a253-fcd8bd32f196",
          "snapshotUrls": "https://i.gkd.li/i/14572053"
        }
      ],
      "enable": false
    },
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": [
        {
          "anyMatches": [
            "@View <(2,3) FrameLayout <2 FrameLayout < FrameLayout < [id=\"com.paokeji.yiqu:id/lyContainer\"]",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/14031922",
            "https://i.gkd.li/import/14427345",
            "https://i.gkd.li/import/15197461"
          ]
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 1,
      "name": "局部广告",
      "activityIds": [
        "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
        "com.aster.comic.app.view.MainActivity",
        "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
      ],
      "rules": [
        {
          "key": 0,
          "name": "腾讯SDK",
          "actionDelay": 350,
          "matches": "[id=\"android:id/content\"] >(-n+4) FrameLayout > FrameLayout[childCount=1] > ImageView[index=0 && id!=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13830354",
            "https://i.gkd.li/import/13842716",
            "https://i.gkd.li/import/13842966"
          ]
        },
        {
          "key": 1,
          "name": "字节SDK",
          "matches": "FrameLayout[desc*=\"close\"] > View",
          "snapshotUrls": [
            "https://i.gkd.li/import/13839432",
            "https://i.gkd.li/import/13839519"
          ]
        },
        {
          "key": 2,
          "name": "穿山甲SDK",
          "actionDelay": 350,
          "matches": [
            "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
            "[text=\"反馈\"] <<n View + View[childCount=1]",
            "[text*=\"跳过\" && text.length<=6] <2 @View -(3-n) View < View",
            "[text=\"反馈\"] -n @View[index<=1] > Image[text.length=0]",
            "[text=\"反馈\"] <<n View - View[childCount=1]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13830798",
            "https://i.gkd.li/import/13810767",
            "https://i.gkd.li/import/13829749",
            "https://i.gkd.li/import/13809737",
            "https://i.gkd.li/import/13809578",
            "https://i.gkd.li/import/13810150"
          ]
        },
        {
          "key": 3,
          "name": "快手SDK",
          "matches": [
            "[text*=\"跳过\"] <n *[clickable=true]",
            "[vid=\"ksad_auto_close_btn\"]",
            "[vid=\"ksad_video_container\"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13809629",
            "https://i.gkd.li/import/13829312",
            "https://i.gkd.li/import/13837855"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
