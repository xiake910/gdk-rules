// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dragon.read",
  "name": "番茄免费小说",
  "groups": [
    {
      "key": -1,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 1000,
          "matches": "@[desc=\"跳过广告\"][clickable=true] > [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/e36d701f-bcee-48d5-99da-1c5301101d9e",
          "snapshotUrls": "https://i.gkd.li/i/23282793"
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
          "activityIds": [
            ".update",
            ".pages.main.MainFragmentActivity"
          ],
          "matches": "@[text=\"以后再说\"] + [text=\"优先体验\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12716477",
            "https://i.gkd.li/i/18175292"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-首页右侧悬浮广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            ".pages.main.MainFragmentActivity",
            ".ad.openingscreenad.OpeningScreenADActivity"
          ],
          "matches": "@ImageView[clickable=true][childCount=0][index=0][visibleToUser=true] < [childCount=3] < RelativeLayout < FrameLayout <2 [id=\"android:id/content\"][childCount=3]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12716506",
            "https://i.gkd.li/i/13318796"
          ]
        },
        {
          "key": 1,
          "activityIds": ".pages.main.MainFragmentActivity",
          "matches": "@ImageView[desc=\"Close Button\"][clickable=true][visibleToUser=true] <2 View < View < View < View < * < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28907537",
            "https://i.gkd.li/i/34167774"
          ]
        },
        {
          "key": 2,
          "activityIds": ".pages.main.MainFragmentActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] + ViewGroup[vid=\"root_view\"] >n [text$=\"领取\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31327606",
            "https://i.gkd.li/i/31410963"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "name": "电商惊喜券",
          "activityIds": ".pages.main.MainFragmentActivity",
          "anyMatches": [
            "@LynxFlattenUI[id=null][text=\"\"][clickable=true] - [text=\"去逛商城\"] -4 [text$=\"电商惊喜券\"]",
            "@ImageView[desc=\"dialog_close_icon\"][clickable=true][visibleToUser=true] <n View[getChild(1).text=\"惊喜电商券即将失效\"] < ComposeView < FrameLayout < [id=\"android:id/content\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12910159",
            "https://i.gkd.li/i/34167848"
          ]
        },
        {
          "key": 1,
          "name": "爆款好物一分购",
          "activityIds": ".pages.main.MainFragmentActivity",
          "matches": "@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id=\"android:id/content\"][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/12878266"
        },
        {
          "key": 2,
          "name": "抽奖赢好礼",
          "activityIds": ".pages.main.MainFragmentActivity",
          "matches": "@LynxFlattenUI[clickable=true] - [text=\"前往抽奖\"]",
          "exampleUrls": "https://m.gkd.li/57941037/77c4098a-818f-4d0f-8492-e98818d0da27",
          "snapshotUrls": "https://i.gkd.li/i/14292475"
        },
        {
          "key": 3,
          "name": "签到弹窗",
          "activityIds": ".pages.main.MainFragmentActivity",
          "matches": "@LynxFlattenUI[clickable=true][visibleToUser=true][text=\"\"] -27 FlattenUIText[text^=\"立即签到\"]",
          "exampleUrls": "https://m.gkd.li/57941037/96afbb4f-afd5-4f64-948d-15fc7bb14075",
          "snapshotUrls": "https://i.gkd.li/i/15223416"
        },
        {
          "key": 4,
          "activityIds": ".reader.ui.ReaderActivity",
          "matches": "AwemeLynxVideoUI +n FlattenUIText[text=\"关闭\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6d33c17b-85de-4977-aa7f-b45e2a917a12",
          "snapshotUrls": "https://i.gkd.li/i/23549149"
        },
        {
          "key": 5,
          "activityIds": ".reader.ui.ReaderActivity",
          "matches": "TextView[text=\"广告\"] +2 Button[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13191156"
        },
        {
          "key": 6,
          "activityIds": ".reader.ui.ReaderActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] +5 [text=\"领取限时福利\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14430326",
            "https://i.gkd.li/i/14969861"
          ]
        },
        {
          "key": 7,
          "name": "坐标点击[关闭]",
          "position": {
            "left": "width * 0.9123",
            "top": "width * 0.067"
          },
          "activityIds": ".reader.ui.ReaderActivity",
          "matches": "View[id=null][text=null][desc=null][childCount=0] < [id=\"com.dragon.read.awemevideo:id/fullvideo_videoview\"][childCount=1][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c29c5647-e2ee-460f-87aa-8717779645ec",
          "snapshotUrls": "https://i.gkd.li/i/23621776"
        },
        {
          "key": 8,
          "activityIds": ".pages.main.MainFragmentActivity",
          "matches": "TextureView < FrameLayout + FrameLayout > TextView[text=\"关闭\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34167893"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-阅读页面关注作者弹窗",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": ".reader.ui.ReaderActivity",
          "matches": "@ImageView +2 FrameLayout >3 [text=\"关注\"]",
          "snapshotUrls": "https://i.gkd.li/i/13399505"
        }
      ]
    },
    {
      "key": 5,
      "name": "分段广告-阅读页面广告",
      "fastQuery": true,
      "activityIds": ".reader.ui.ReaderActivity",
      "rules": [
        {
          "key": 0,
          "matches": "@[(name$=\"ImageView\" || getChild(0).name$=\"ImageView\") && desc!=\"back_unfold\"][clickable=true][visibleToUser=true][width<102 && height<102] <n [childCount>1] >(2,3) [text*=\"查看\" || text$=\"优惠\" || text^=\"立即\" || text^=\"马上\" || text*=\"参与\" || text*=\"参加\" || text*=\"免费\" || text^=\"领\" || text$=\"金币\"][text!=\"查看下载\"][text.length<10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12908734",
            "https://i.gkd.li/i/18138903",
            "https://i.gkd.li/i/21623147",
            "https://i.gkd.li/i/14622531",
            "https://i.gkd.li/i/25174203",
            "https://i.gkd.li/i/26347335",
            "https://i.gkd.li/i/13520314",
            "https://i.gkd.li/i/24706223",
            "https://i.gkd.li/i/14548657",
            "https://i.gkd.li/i/14810480",
            "https://i.gkd.li/i/31328323"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/28821485",
            "https://i.gkd.li/i/31111672",
            "https://i.gkd.li/i/32085481"
          ],
          "exampleUrls": "https://e.gkd.li/3de0d5d9-0c02-4fe7-b5e8-b9fdb6688f8e"
        },
        {
          "key": 1,
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] < FrameLayout - LinearLayout >2 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/c172db67-a489-488b-a5f5-35aa9657c444",
          "snapshotUrls": "https://i.gkd.li/i/18724040"
        },
        {
          "key": 2,
          "matches": "@[id=null][visibleToUser=true][width<121 && height<121][childCount<2][left>prev.width.div(10).times(9)][top>prev.height.div(8).times(7)] <<n [vid=\"root_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28781063",
            "https://i.gkd.li/i/28781061",
            "https://i.gkd.li/i/24189900",
            "https://i.gkd.li/i/24205810",
            "https://i.gkd.li/i/28800387"
          ],
          "exampleUrls": "https://e.gkd.li/1f431aef-3464-4f53-90e4-3f1bd9cca922"
        },
        {
          "key": 3,
          "name": "坐标点击[反馈]",
          "position": {
            "left": "width * 0.77",
            "top": "height * 0.64"
          },
          "matches": "@ViewGroup[visibleToUser=true][height<150][width=prev.width] < [childCount=2] <(2,3) FrameLayout[childCount<4] >7 [vid=\"ttlive_player_render_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27706770",
            "https://i.gkd.li/i/28834344",
            "https://i.gkd.li/i/32435385"
          ],
          "exampleUrls": "https://e.gkd.li/aef38288-d84b-4e13-8161-ebebc27b822b"
        },
        {
          "key": 4,
          "name": "点击[反馈]",
          "actionCd": 3500,
          "actionDelay": 200,
          "matches": "[text=\"反馈\" || desc=\"反馈\"][visibleToUser=true][name$=\"UIText\" || name$=\"ViewGroup\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13520160",
            "https://i.gkd.li/i/13816453",
            "https://i.gkd.li/i/24128141"
          ],
          "exampleUrls": "https://e.gkd.li/3837a70f-30e3-42d1-9354-696dcda598b7"
        },
        {
          "key": 5,
          "matches": "@ImageView[visibleToUser=true][width<100][right>parent.right.minus(100)] <n [vid=\"root_view\"] >2 [text=\"播放全集\"][focusable=true]",
          "snapshotUrls": "https://i.gkd.li/i/34167862"
        },
        {
          "key": 50,
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "name": "②点击[不感兴趣/关闭此广告]",
          "anyMatches": [
            "@[clickable=true] > [text=\"不感兴趣\" || text^=\"关闭此\" || text=\"关闭本次展示\"]",
            "[text=\"不感兴趣\" || text^=\"关闭此\" || text=\"关闭本次展示\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13816454",
            "https://i.gkd.li/i/14913207",
            "https://i.gkd.li/i/24128392",
            "https://i.gkd.li/i/24189605",
            "https://i.gkd.li/i/14540281",
            "https://i.gkd.li/i/32435735",
            "https://i.gkd.li/i/34167884"
          ],
          "exampleUrls": "https://e.gkd.li/e04bcb90-ad61-43d9-97e9-b4f6e3873320"
        }
      ]
    },
    {
      "key": 6,
      "name": "评价提示-请求好评弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".pages.main.MainFragmentActivity",
          "matches": "@ImageView[clickable=true] +3 * > [text=\"五星好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/14395093"
        }
      ]
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "desc": "点击\"取消\"",
      "fastQuery": true,
      "activityIds": [
        ".widget.ConfirmDialogBuilder",
        ".pages.main.MainFragmentActivity"
      ],
      "rules": [
        {
          "key": 0,
          "name": "首页",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": [
            "[text=\"开启推送提醒\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12716592",
            "https://i.gkd.li/i/21589667"
          ]
        },
        {
          "key": 1,
          "name": "小说阅读页",
          "activityIds": ".reader.ui.ReaderActivity",
          "matches": [
            "[text=\"开启推送通知\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/27190449"
        },
        {
          "key": 2,
          "matches": "TextView[text=\"暂不开启\"] < @[clickable=true] <n View < View < ComposeView < * < * < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/33832486"
        }
      ]
    },
    {
      "key": 15,
      "name": "功能类-误入直播后自动[退出]",
      "desc": "配合 看广告自动领奖励 使用",
      "fastQuery": true,
      "activityIds": "com.bytedance.mira.stub.p0.StubSingleTaskActivity1",
      "rules": [
        {
          "key": 1501,
          "name": "①已进直播间-按[返回键]",
          "action": "back",
          "actionDelay": 500,
          "matches": "[id=\"com.dragon.read.live:id/swipe_refresh\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/28906839"
        },
        {
          "key": 1502,
          "name": "②点击确认[退出]",
          "matches": "[text=\"退出\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/28906845"
        }
      ]
    },
    {
      "key": 16,
      "name": "功能类-看广告自动领奖励",
      "fastQuery": true,
      "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
      "rules": [
        {
          "key": 0,
          "name": "①隔10秒点击右上角x掉",
          "actionDelay": 10000,
          "matches": "@ImageView[width<40 && height<40] <n ViewGroup <(4,5) ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/c3e53a6c-cc60-413d-8464-2b4a1259c038",
          "snapshotUrls": [
            "https://i.gkd.li/i/24689154",
            "https://i.gkd.li/i/24688948",
            "https://i.gkd.li/i/24689141",
            "https://i.gkd.li/i/24689202"
          ]
        },
        {
          "key": 1,
          "name": "②已得奖励-点击x掉",
          "matches": "@ImageView < ViewGroup[desc*=\"关闭\" && desc!*=\"秒\"]",
          "position": {
            "left": "width * 0.5",
            "top": "width * 0.5"
          },
          "exampleUrls": "https://e.gkd.li/9cd91c80-9cba-48e8-97cd-dac5968694e4",
          "snapshotUrls": [
            "https://i.gkd.li/i/26530262",
            "https://i.gkd.li/i/26530263"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/26528931"
        },
        {
          "key": 20,
          "preKeys": [
            0,
            1
          ],
          "name": "③坐标点击[继续观看]",
          "actionDelay": 500,
          "position": {
            "left": "width * 0.5",
            "bottom": "width * 0.3182"
          },
          "matches": "ImageView - @ViewGroup[childCount=1][width>600 && height>600][getChild(0).name$=\"ImageView\"] -(1,2) ScrollView",
          "exampleUrls": "https://e.gkd.li/f2859af8-7ca7-40d3-9737-7be8b0200bae",
          "snapshotUrls": [
            "https://i.gkd.li/i/24689140",
            "https://i.gkd.li/i/24689143",
            "https://i.gkd.li/i/24689393",
            "https://i.gkd.li/i/28378131"
          ]
        },
        {
          "key": 99,
          "name": "④已无新视频-退出",
          "matches": "@[clickable=true][width<120 && height<120] + LinearLayout > [text=\"当前无新视频\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24689246"
        }
      ]
    },
    {
      "key": 17,
      "name": "评价提示-点评此书弹窗",
      "desc": "点击[取消]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".reader.ui.ReaderActivity",
          "matches": [
            "[text=\"点评此书\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/21589381"
        }
      ]
    },
    {
      "key": 18,
      "name": "功能类-观看广告自动静音",
      "desc": "点击1次, activity刷新后会重置",
      "fastQuery": true,
      "actionDelay": 300,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "scopeKeys": [
        15
      ],
      "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
      "rules": [
        {
          "key": 0,
          "preKeys": [
            1501,
            1502
          ],
          "name": "刚退出直播间-不点击[静音]",
          "action": "none",
          "matches": "[parent=null]"
        },
        {
          "key": 1,
          "name": "①点击[静音]",
          "matches": "@ImageView[visibleToUser=true][width>20 && width<93 && height>20 && height<108][right<prev.width.div(3)][bottom<prev.height.div(10)] <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/28907595"
        },
        {
          "key": 2,
          "name": "②坐标点击[静音]",
          "position": {
            "left": "width * 0.5",
            "top": "width * 0.8730"
          },
          "matches": "@ImageView[width>20 && width<93 && height<0][right<prev.width.div(3)][bottom<prev.height.div(10)] <<n [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/d8949efa-e2f7-49d2-a8d7-4837ed349aef",
          "snapshotUrls": "https://i.gkd.li/i/26528931"
        }
      ]
    },
    {
      "key": 19,
      "name": "其他-添加桌面小组件",
      "desc": "点击[取消]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".social.ugc.topic.topicdetail.NewUgcTopicDetailActivity",
          "matches": "[text^=\"添加到\"] +n [childCount=2] > [text=\"取消\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/28784392",
          "exampleUrls": "https://e.gkd.li/b4cb96bd-0ced-4228-bd4a-a1be162bb75a"
        }
      ]
    },
    {
      "key": 20,
      "name": "功能类-刷短剧时半自动[不喜听书]",
      "desc": "前提需手动长按小说标签的视频, ①点击[不感兴趣] ②选择[不喜欢听书]",
      "activityIds": ".pages.main.MainFragmentActivity",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "name": "①点击[不感兴趣]",
          "matches": "@[clickable=true] > TextView[vid=\"action_text\"][text=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34419649",
          "exampleUrls": "https://e.gkd.li/77dca54c-86b8-40a6-b00a-44e4f8adedf8"
        },
        {
          "key": 1,
          "preKeys": [
            0
          ],
          "name": "②点击[不喜欢听书]",
          "matches": "[text=\"不喜欢听书\"] < @[clickable=true][childCount=1] <n * - [text=\"选择不喜欢的理由\"] <2 View < ComposeView < * < * < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/34419676",
          "exampleUrls": "https://e.gkd.li/77dca54c-86b8-40a6-b00a-44e4f8adedf8"
        }
      ]
    },
    {
      "key": 0,
      "name": "局部广告-阅读页面广告",
      "activityIds": [
        "com.dragon.read.ad.banner.ui",
        "com.dragon.read.reader.ReaderActivity",
        "com.dragon.read.reader.ui.ReaderActivity"
      ],
      "rules": [
        {
          "key": 1,
          "fastQuery": true,
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] - LinearLayout >(2,3) [text=\"广告\" || text=\"立享优惠\" || text*=\"查看\" || text^=\"立即\" || text$=\"参与\"][text.length<5]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12908734",
            "https://i.gkd.li/i/14540281",
            "https://i.gkd.li/i/18138903",
            "https://i.gkd.li/i/21623147",
            "https://i.gkd.li/i/25174203"
          ]
        },
        {
          "key": 2,
          "fastQuery": true,
          "activityIds": ".reader.ui.ReaderActivity",
          "matches": "[id=\"com.dragon.read:id/close_button\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/3de0d5d9-0c02-4fe7-b5e8-b9fdb6688f8e",
          "snapshotUrls": "https://i.gkd.li/i/13520314"
        },
        {
          "key": 3,
          "fastQuery": true,
          "matches": "[text=\"关闭此条广告\"]",
          "exampleUrls": "https://m.gkd.li/57941037/cf9d0574-dc89-4f03-ba01-eb9bcc97925f",
          "snapshotUrls": "https://i.gkd.li/i/14540281"
        },
        {
          "key": 4,
          "matches": "HorizontalAndVerticalScrollView > FrameLayout[childCount>=13] >(7,8,9) @FrameLayout[index=2][clickable=true] > ImageView",
          "exampleUrls": "https://m.gkd.li/57941037/0129e5a7-ead1-4b92-a008-708632e5a927",
          "snapshotUrls": [
            "https://i.gkd.li/i/14548657",
            "https://i.gkd.li/i/14622531",
            "https://i.gkd.li/i/14810480"
          ]
        },
        {
          "key": 5,
          "name": "原著改编广告-点击[x]",
          "fastQuery": true,
          "matches": "@ImageView[clickable=true] +n ViewGroup[visibleToUser=true] > [text=\"原著改编\"]",
          "exampleUrls": "https://e.gkd.li/f838939f-d42d-4bf8-9a68-59f4d4ec0d9b",
          "snapshotUrls": "https://i.gkd.li/i/24706223"
        }
      ]
    },
    {
      "key": 3000,
      "name": "功能类-观看广告自动领取奖励",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "actionDelay": 10000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "@ImageView[width<40 && height<40] <n ViewGroup <(4,5) ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/c3e53a6c-cc60-413d-8464-2b4a1259c038",
          "snapshotUrls": [
            "https://i.gkd.li/i/24689154",
            "https://i.gkd.li/i/24688948",
            "https://i.gkd.li/i/24689141",
            "https://i.gkd.li/i/24689202"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "actionDelay": 500,
          "position": {
            "left": "width * 0.5",
            "bottom": "width * 0.3182"
          },
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "ImageView[childCount=0] < @ViewGroup[childCount=1][width>600 && height>600] <3 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/f2859af8-7ca7-40d3-9737-7be8b0200bae",
          "snapshotUrls": [
            "https://i.gkd.li/i/24689140",
            "https://i.gkd.li/i/24689143",
            "https://i.gkd.li/i/24689393"
          ]
        },
        {
          "key": 99,
          "fastQuery": true,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "@[clickable=true][width<120 && height<120] + LinearLayout > [text=\"当前无新视频\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24689246"
        }
      ]
    },
    {
      "key": 3001,
      "name": "局部广告-首页-右侧红包浮窗",
      "fastQuery": true,
      "matchTime": 20000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
      "rules": [
        {
          "anyMatches": [
            "@ImageView < * < RelativeLayout < FrameLayout <(1,2) [id=\"android:id/content\"]",
            "@ImageView + ViewGroup > TextView[text=\"领取\"][index=parent.childCount.minus(1)]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12716506",
            "https://i.gkd.li/i/17725414",
            "https://i.gkd.li/i/21708368"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3002,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 20000,
      "forcedTime": 20000,
      "resetMatch": "app",
      "activityIds": ".pages.main.MainFragmentActivity",
      "rules": [
        {
          "matches": "@ImageView +n LinearLayout > TextView[text=\"我要反馈\"] +2 TextView[text=\"五星好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/20772203"
        }
      ],
      "enable": false
    },
    {
      "key": 3003,
      "name": "全屏广告-周末开红包",
      "desc": "点击 X",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".pages.main.MainFragmentActivity",
      "forcedTime": 20000,
      "rules": [
        {
          "matches": "@FlattenUIImage[index=parent.childCount.minus(1) ||index=parent.childCount.minus(2)] <n FrameLayout < * < * < * < * < * < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/16347298",
            "https://i.gkd.li/import/14383684"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3004,
      "name": "全屏广告-书城-广告弹窗",
      "desc": "【X】",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".pages.main.MainFragmentActivity",
          "matches": "@ImageView <2 LinearLayout < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18124360",
            "https://i.gkd.li/i/18124367"
          ]
        },
        {
          "name": "电商惊喜券",
          "matches": "@LynxFlattenUI[id=null][text=\"\"][clickable=true] - [text=\"去逛商城\"] -4 [text$=\"电商惊喜券\"]",
          "snapshotUrls": "https://i.gkd.li/import/12910159"
        },
        {
          "name": "爆款好物一分购",
          "matches": "@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id=\"android:id/content\"][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/import/12878266"
        },
        {
          "name": "限时会员福利",
          "matches": "@ImageView[clickable=true] -3 ViewGroup >n TextView[text=\"恭喜获得限时会员福利\"]",
          "snapshotUrls": "https://i.gkd.li/i/18553545"
        }
      ],
      "enable": false
    },
    {
      "key": 3005,
      "name": "通知提示-开启推送提醒",
      "desc": "自动点击【取消】",
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "forcedTime": 10000,
      "activityIds": [
        ".pages.main.MainFragmentActivity",
        ".component.biz.impl.SearchActivity"
      ],
      "rules": "@[text=\"取消\"] < * -2 * > [text=\"开启推送提醒\"]",
      "snapshotUrls": "https://i.gkd.li/i/17661722",
      "enable": false
    },
    {
      "key": 7,
      "name": "评价提示-阅读",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "match",
      "rules": [
        {
          "matches": "@TextView[text=\"取消\"] -n TextView[text=\"点评此书\"]",
          "snapshotUrls": "https://i.gkd.li/i/21012283"
        }
      ],
      "enable": false
    },
    {
      "key": 11,
      "name": "局部广告-阅读-卡片广告",
      "desc": "点击X",
      "fastQuery": true,
      "activityIds": ".reader.ui.ReaderActivity",
      "rules": [
        {
          "name": "卡片广告",
          "anyMatches": [
            "@ImageView[visibleToUser=true] < FrameLayout <3 ViewGroup[childCount=4] <n * <n * <n * <n * <n * <n  * <n * <n * <n * <n * <n [id=\"com.dragon.read:id/root_view\"]",
            "@ImageView[visibleToUser=true] < FrameLayout <3 ViewGroup[childCount=4] <n * <n * <n * <n * <n * <n  * <n * <n * <n * <n * <n * <n [id=\"com.dragon.read:id/root_view\"]"
          ],
          "excludeMatches": [
            "TextView[text=\"目录\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12716444",
            "https://i.gkd.li/i/17474881"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/20340317"
          ]
        },
        {
          "key": 1,
          "name": "底部卡片广告",
          "anyMatches": [
            "@ImageView - LinearLayout <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id=\"com.dragon.read:id/root_view\"]",
            "@ImageView < FrameLayout - LinearLayout <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id=\"com.dragon.read:id/root_view\"]",
            "@UISvg +n FlattenUIText[text=\"广告\"] <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id=\"com.dragon.read:id/root_view\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12908734",
            "https://i.gkd.li/import/13520314",
            "https://i.gkd.li/import/15294350",
            "https://i.gkd.li/i/17474877",
            "https://i.gkd.li/i/17565008",
            "https://i.gkd.li/i/21479922"
          ]
        },
        {
          "preKeys": 1,
          "matches": "TextView[text=\"关闭此广告\"||text=\"关闭此条广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17928194",
            "https://i.gkd.li/i/17793195"
          ]
        },
        {
          "name": "卡片-关注作者",
          "matches": "@ImageView + TextView[text=\"关注我，掌握书籍最新动态\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13399505",
            "https://i.gkd.li/import/14896809"
          ]
        },
        {
          "name": "领金币",
          "matches": "@ImageView < [id=\"com.dragon.read:id/parent\"]",
          "snapshotUrls": "https://i.gkd.li/i/17474890"
        },
        {
          "name": "免广告权益",
          "matches": "@ImageView - TextView[text=\"免广告权益\"]",
          "snapshotUrls": "https://i.gkd.li/i/19937082"
        },
        {
          "name": "限时会员福利",
          "matches": "@ImageView + View + TextView[text=\"恭喜获得限时会员福利\"]",
          "snapshotUrls": "https://i.gkd.li/i/19937239"
        }
      ],
      "enable": false
    },
    {
      "key": 12,
      "name": "全屏广告-阅读-视频广告",
      "desc": "点击【关闭】/【反馈-不感兴趣】",
      "fastQuery": true,
      "activityIds": [
        ".reader.ui.ReaderActivity",
        ".ad.openingscreenad.OpeningScreenADActivity"
      ],
      "rules": [
        {
          "key": 1,
          "name": "点击【关闭】",
          "matches": "@[text=\"关闭\"] - [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/import/13191156"
        },
        {
          "key": 2,
          "name": "点击【反馈】",
          "matchRoot": true,
          "matches": "[text=\"反馈\"][visibleToUser=true]",
          "excludeMatches": [
            "@[text=\"关闭\"] - [text=\"反馈\"]",
            "[text$=\"秒后，继续阅读下一页\"]",
            "@[text=\"反馈\"][visibleToUser=true][2=parent.childCount]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13520160",
            "https://i.gkd.li/i/17468490",
            "https://i.gkd.li/i/17474896",
            "https://i.gkd.li/i/21708291"
          ],
          "exampleUrls": [
            "https://i.gkd.li/i/17564881",
            "https://i.gkd.li/i/17689909"
          ]
        },
        {
          "preKeys": 2,
          "key": 3,
          "name": "点击【不感兴趣】",
          "actionDelay": 100,
          "matches": "@TextView[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13520219",
            "https://i.gkd.li/import/13674550",
            "https://i.gkd.li/i/17461153",
            "https://i.gkd.li/i/17928168"
          ]
        },
        {
          "name": "关闭",
          "matches": "FlattenUIText[text=\"关闭\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/21272921"
        }
      ],
      "enable": false
    },
    {
      "key": 13,
      "name": "全屏广告-阅读-翻页广告",
      "desc": "自动点击右下方空白处翻页，翻页模式【上下】无法使用",
      "fastQuery": true,
      "forcedTime": 3600000,
      "activityIds": [
        ".reader.ui.ReaderActivity",
        ".ad.openingscreenad.OpeningScreenADActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"android:id/content\"]",
          "anyMatches": [
            "UISvg +n FlattenUIText[text^=\"¥\"][visibleToUser=true]",
            "[text=\"点击关闭广告并退出小说\" || text=\"去抢购\" || text=\"去领取\"][visibleToUser=true]",
            "TextView[text~=\"(?is)全[0-9]+集\"] <2 ViewGroup + TextView[text=\"看全集\"][visibleToUser=true]",
            "TextView[text=\"观看全集\"][visibleToUser=true] -n TextView[vid=\"title\"][text=\"短剧端内免费看\"]",
            "TextView[text=\"免费看剧\"][visibleToUser=true] < FrameLayout <(1,2) LinearLayout -n TextView[vid=\"title\"]",
            "FlattenUIText[text=\"更多精选好物\"||text=\"立即查看\"||text=\"我知道了\"][visibleToUser=true]"
          ],
          "excludeMatches": "[text=\"反馈\"]",
          "position": {
            "right": 100,
            "bottom": 300
          },
          "snapshotUrls": [
            "https://i.gkd.li/i/17941812",
            "https://i.gkd.li/i/17967442",
            "https://i.gkd.li/i/17474887",
            "https://i.gkd.li/i/17474889",
            "https://i.gkd.li/i/17932302",
            "https://i.gkd.li/i/18124417",
            "https://i.gkd.li/i/20279981",
            "https://i.gkd.li/i/20585911",
            "https://i.gkd.li/i/20586037",
            "https://i.gkd.li/i/21479966",
            "https://i.gkd.li/i/21708274",
            "https://i.gkd.li/i/21308312",
            "https://i.gkd.li/i/21913845",
            "https://i.gkd.li/i/21913873"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 14,
      "name": "局部广告-阅读-菜单右侧福利浮窗",
      "desc": "点击X",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".reader.ui.ReaderActivity",
      "rules": [
        {
          "name": "图书福利",
          "matches": "@ImageView - ImageView < * < * < FrameLayout + LinearLayout > LinearLayout > TextView[text=\"目录\"]",
          "snapshotUrls": "https://i.gkd.li/i/20340317"
        },
        {
          "name": "免费领会员",
          "matches": "ViewGroup - @ImageView < * < * < FrameLayout + LinearLayout > LinearLayout > TextView[text=\"目录\"]",
          "snapshotUrls": "https://i.gkd.li/i/21341401"
        }
      ],
      "enable": false
    }
  ]
} as any);
