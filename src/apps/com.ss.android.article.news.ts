// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.article.news",
  "name": "今日头条",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            "com.bytedance.ies.outertest.cn.OuterTestGuideDialogActivity",
            "com.ss.android.article.base.feature.ugc.story.StoryVideoActivity"
          ],
          "matches": "@[desc=\"关闭\"] -(2,3) [text*=\"版本更新\" || text*=\"升级版本\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13316081",
            "https://i.gkd.li/i/17681710"
          ]
        },
        {
          "key": 1,
          "activityIds": ".activity.MainActivity",
          "matches": "[text=\"以后再说\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/79b75132-9d6f-4e4c-a95b-56dbaca1965d",
          "snapshotUrls": "https://i.gkd.li/i/18194356"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-浮窗广告",
      "rules": [
        {
          "key": 0,
          "name": "首页-浮窗广告",
          "activityIds": ".activity.MainActivity",
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13762123"
        },
        {
          "key": 1,
          "name": "视频页-浮窗广告",
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity",
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView + ImageView[clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13761236"
        }
      ],
      "enable": false
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".activity.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[text^=\"开启通知\"] + LinearLayout > [text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706699"
        },
        {
          "key": 1,
          "matches": "[text^=\"开启通知\"] < LinearLayout +2 ImageView[desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840217"
        }
      ],
      "enable": false
    },
    {
      "key": 11,
      "name": "全屏广告-竖屏视频广告",
      "desc": "点击右上角[更多]图标按钮,点击不感兴趣",
      "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity",
      "rules": [
        {
          "key": 0,
          "name": "点击右上角[更多]图标按钮",
          "matches": "ImageView[clickable=true][desc=\"更多\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12679280",
            "https://i.gkd.li/i/12733282",
            "https://i.gkd.li/i/12763251",
            "https://i.gkd.li/i/12763252",
            "https://i.gkd.li/i/12733281",
            "https://i.gkd.li/i/13185633",
            "https://i.gkd.li/i/13186082",
            "https://i.gkd.li/i/13930050"
          ]
        },
        {
          "key": -1,
          "preKeys": [
            0
          ],
          "actionCd": 35000,
          "name": "点击不感兴趣",
          "matches": "@LinearLayout[clickable=true] > RelativeLayout + TextView[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12679277"
        }
      ],
      "enable": false
    },
    {
      "key": 12,
      "name": "分段广告-信息流广告",
      "desc": "点击右上角x按钮,点击[不感兴趣]",
      "fastQuery": true,
      "activityIds": [
        ".activity.MainActivity",
        "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
      ],
      "rules": [
        {
          "key": 0,
          "name": "点击右上角x按钮",
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12836272",
            "https://i.gkd.li/i/13093576",
            "https://i.gkd.li/i/16624480"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733152",
            "https://i.gkd.li/i/12755265",
            "https://i.gkd.li/i/16624474",
            "https://i.gkd.li/i/16624395",
            "https://i.gkd.li/i/17893117"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 13,
      "name": "局部广告-底部话题推荐弹窗",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "name": "话题谈论",
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12706699"
        }
      ],
      "enable": false
    },
    {
      "key": 14,
      "name": "功能类-自动观看广告视频",
      "desc": "自动观看广告并等待30s后关闭",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "name": "点击\"看视频\"",
          "activityIds": ".activity.MainActivity",
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402468"
        },
        {
          "preKeys": [
            0
          ],
          "name": "等待30s点击\"关闭\"",
          "actionDelay": 30000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "UIText[text=\"广告\"] +n UIText[text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402480"
        }
      ],
      "enable": false
    },
    {
      "key": 15,
      "name": "局部广告-底部热榜弹窗",
      "desc": "点击X",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "FrameLayout[childCount=8] > FlattenUIImage[index=7]",
          "snapshotUrls": "https://i.gkd.li/i/13828331"
        }
      ],
      "enable": false
    },
    {
      "key": 16,
      "name": "功能类-[关联抖音账号]弹窗",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "@[desc=\"关闭\"] + [text^=\"关联\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c938001e-f39b-4ece-ad0e-2c93ba41aa94",
          "snapshotUrls": "https://i.gkd.li/i/14717889"
        }
      ],
      "enable": false
    },
    {
      "key": 17,
      "name": "功能类-[下次打开APP默认进入xx频道]弹窗",
      "desc": "点击[取消]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": [
            "[text^=\"下次打开APP默认进入\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/6166519d-d38d-49c0-b54b-72c25670aa24",
          "snapshotUrls": "https://i.gkd.li/i/15102876"
        }
      ],
      "enable": false
    },
    {
      "key": 18,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 0,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity",
          "matches": "[id=\"android:id/content\"] > FrameLayout[childCount=3] > ImageView[clickable=true][visibleToUser=true][index=2]",
          "exampleUrls": "https://e.gkd.li/c3889d29-7260-4ab1-8070-75a6a68e4e2c",
          "snapshotUrls": "https://i.gkd.li/i/15314921"
        },
        {
          "key": 1,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity",
          "matches": "@FlattenUIImage[text=\"\"] -10 FlattenUIText[text=\"恭喜获得惊喜奖励\"]",
          "exampleUrls": "https://e.gkd.li/057d40f6-f94e-4b54-857f-b5b11de245a5",
          "snapshotUrls": "https://i.gkd.li/i/17681713"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "功能类-[下次打开APP默认进入发现频道]弹窗",
      "desc": "点击取消",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "[text^=\"下次打开APP默认进入\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6166519d-d38d-49c0-b54b-72c25670aa24",
          "snapshotUrls": "https://i.gkd.li/i/15102876"
        }
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3001,
      "name": "全屏广告-请求通知权限弹窗",
      "activityIds": [
        "com.ss.android.article.news.activity.MainActivity"
      ],
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] + LinearLayout > [text=\"暂不开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12706699"
          ]
        },
        {
          "matches": "[text^=\"开启通知\"] < LinearLayout +2 ImageView[desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12840217"
          ]
        }
      ]
    },
    {
      "enable": false,
      "key": 3002,
      "name": "局部广告-信息流广告",
      "desc": "点击右上角x按钮,点击不感兴趣",
      "rules": [
        {
          "name": "点击右上角x按钮",
          "key": 0,
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/import/12733098",
            "https://i.gkd.li/import/12755264",
            "https://i.gkd.li/import/12836272",
            "https://i.gkd.li/import/12840162",
            "https://i.gkd.li/import/13093576",
            "https://i.gkd.li/import/12733098"
          ],
          "exampleUrls": [
            "https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif"
          ]
        },
        {
          "name": "点击不感兴趣",
          "preKeys": 0,
          "key": 1,
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "matches": "@ViewGroup[clickable=true] > ImageView + TextView[text=\"不感兴趣\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/import/12733152",
            "https://i.gkd.li/import/12755265"
          ]
        }
      ]
    },
    {
      "enable": false,
      "key": 3003,
      "name": "全屏广告-自动观看广告视频",
      "desc": "自动观看广告并等待30s后关闭",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "name": "点击【看视频】",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "snapshotUrls": "https://i.gkd.li/import/13402468"
        },
        {
          "name": "等待30s点击【关闭】",
          "actionDelay": 30000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "UIText[text=\"广告\"] +n UIText[text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/import/13402480"
        }
      ]
    },
    {
      "key": 3004,
      "fastQuery": true,
      "name": "局部广告-局部广告-底部热榜弹窗",
      "desc": "点击X",
      "rules": [
        {
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "@FlattenUIImage[clickable=true] <n FrameLayout <<2 FrameLayout - LinearLayout [text=\"首页\"]",
          "snapshotUrls": "https://i.gkd.li/import/13828331"
        }
      ],
      "enable": false
    }
  ]
} as any);
