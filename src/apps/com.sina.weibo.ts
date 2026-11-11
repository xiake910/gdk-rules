// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sina.weibo",
  "name": "微博",
  "groups": [
    {
      "key": 8,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 3,
          "activityIds": ".feed.MPDialogActivity",
          "matches": "WebView[text=\"Wbox\"] > View[childCount=1] >(1,2) View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid=\"container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14969848",
            "https://i.gkd.li/i/16944794",
            "https://i.gkd.li/i/19807700"
          ]
        },
        {
          "key": 4,
          "activityIds": ".feed.MPDialogActivity",
          "matches": "@Image[text=\"close\"] < View[childCount=4] <2 * <<n [vid=\"container\"]",
          "snapshotUrls": "https://i.gkd.li/i/14033735"
        }
      ],
      "enable": false
    },
    {
      "key": 9,
      "name": "权限提示-通知权限",
      "desc": "自动点击暂不开启",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": ".notifyguidev2.NotifyGuideV2Activity",
          "matches": "[text=\"暂不开启\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/18342279"
        }
      ],
      "enable": false
    },
    {
      "key": 14,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            ".MainTabActivity",
            ".utils.WeiboDialog$CustomDialog"
          ],
          "matches": "@[text=\"以后再说\"] +2 [text=\"去开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218093",
            "https://i.gkd.li/i/13003311"
          ]
        },
        {
          "key": 1,
          "activityIds": ".MainTabActivity",
          "matches": "@[vid=\"btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255595"
        }
      ],
      "enable": false
    },
    {
      "key": 17,
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击[不感兴趣/不想看到此类内容]",
      "fastQuery": true,
      "activityIds": [
        ".feed.DetailWeiboActivity",
        ".feed.detailrefactor.DetailPageActivity",
        ".feed.SubCommentActiity",
        ".feed.halfcontainer.HalfContainerPageActivity"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "@[vid=\"ll_close\" || vid=\"closeButton\"] > [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13852321",
            "https://i.gkd.li/i/19526000",
            "https://i.gkd.li/i/21828244",
            "https://i.gkd.li/i/24291704",
            "https://i.gkd.li/i/19538265"
          ],
          "exampleUrls": "https://e.gkd.li/a3d4a9fb-43a0-46e0-a073-13d9691beb19"
        },
        {
          "key": 1,
          "matches": "RelativeLayout >2 ImageView[vid=\"right_top_tag\" || vid=\"iv_ad_x\"][clickable=true][visibleToUser=true][width<200]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14210775",
            "https://i.gkd.li/i/22275086"
          ],
          "exampleUrls": "https://e.gkd.li/f0d15b65-21f5-4398-9d24-da858ea34a8b"
        },
        {
          "key": 3,
          "matches": [
            "[vid=\"left_img_ad_container\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13635551",
            "https://i.gkd.li/i/19525985"
          ]
        },
        {
          "key": 6,
          "matches": "@[name$=\"FrameLayout\" || name$=\"ImageView\"][clickable=true][childCount<2][width<50 && height<50] <<n [name$=\"Layout\"] -(1,2) [visibleToUser=true] >(1,3) [vid=\"shareLayout_0\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/21166775",
            "https://i.gkd.li/i/21828269",
            "https://i.gkd.li/i/31557775"
          ],
          "exampleUrls": "https://e.gkd.li/83586a40-3c41-460a-acab-248517589fe5"
        },
        {
          "preKeys": [
            0,
            1,
            3,
            6
          ],
          "key": 90,
          "matchRoot": true,
          "anyMatches": [
            "[text$=\"不感兴趣\"][clickable=true]",
            "@LinearLayout[clickable=true] >2 [text=\"不感兴趣\" || text=\"不想看到此类内容\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13852322",
            "https://i.gkd.li/i/13958782",
            "https://i.gkd.li/i/16785777",
            "https://i.gkd.li/i/14730274",
            "https://i.gkd.li/i/19551451",
            "https://i.gkd.li/i/20710958",
            "https://i.gkd.li/i/21828246"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 18,
      "name": "评价提示-APP评分弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainTabActivity",
          "matches": "@[text=\"不了，谢谢\"] +4 [text=\"喜欢，给好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/13620220"
        }
      ],
      "enable": false
    },
    {
      "key": 19,
      "name": "功能类-自动点击查看原图",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".photoalbum.imageviewer.ImageViewer",
          "matches": "@LinearLayout >3 [vid=\"tv_dialog_item\"][text^=\"原图\"]",
          "snapshotUrls": "https://i.gkd.li/i/13929119"
        }
      ],
      "enable": false
    },
    {
      "key": 20,
      "name": "功能类-超话自动签到",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "name": "点击签到",
          "activityIds": ".supergroup.SGPageActivity",
          "matches": [
            "ViewGroup[childCount=2] > [text=\"管理\"][visibleToUser=true]",
            "[text=\"签到\" || text=\"Sign in\"] < [vid=\"right_button\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15092999",
            "https://i.gkd.li/i/15092970",
            "https://i.gkd.li/i/15136801"
          ]
        },
        {
          "key": 1,
          "name": "取消勾选[接收本超话签到提醒推送]",
          "activityIds": ".supergroup.pagepop.PagePopActivity",
          "matches": "@[checked=true] < * > [text=\"接收本超话签到提醒推送\"]",
          "snapshotUrls": "https://i.gkd.li/i/15103524"
        },
        {
          "key": 2,
          "name": "关闭签到成功弹窗",
          "activityIds": ".supergroup.pagepop.PagePopActivity",
          "matches": [
            "[text^=\"连续签到\"]",
            "[vid=\"iv_close_v2\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15103524",
            "https://i.gkd.li/i/15136825",
            "https://i.gkd.li/i/15136842"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 22,
      "name": "功能类-超话一键签到",
      "desc": "点击[一键签到]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".supergroup.generic.GenericChannelActivity",
          "matches": [
            "[text*=\"一键签到\"][visibleToUser=true]",
            "[vid=\"checkinBtn\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/3fad288d-ba21-44ed-8ebe-f9b4cbde1d3c",
          "snapshotUrls": "https://i.gkd.li/i/16420751"
        }
      ],
      "enable": false
    },
    {
      "key": 23,
      "name": "其他-关闭猪手提示",
      "desc": "点击[取消]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainTabActivity",
          "matches": [
            "[text^=\"猪手超话自动签到失败\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://e.gkd.li/92e08aea-ae70-4ea8-be65-442f8e2e423d",
          "snapshotUrls": "https://i.gkd.li/i/16827119"
        }
      ],
      "enable": false
    },
    {
      "key": 24,
      "name": "功能类-关闭点赞时的验证",
      "rules": [
        {
          "activityIds": ".geetest.GeetCheckActivityForNet",
          "matches": "Button[text^=\"关闭验证\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/7a8ed873-a6e8-4260-9f5c-3ff05d5788db",
          "snapshotUrls": "https://i.gkd.li/i/16827853"
        }
      ],
      "enable": false
    },
    {
      "key": 25,
      "name": "功能类-关主页自动切换到[关注的人]TAB",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".flowbusiness.commonpage.FlowCommonPageActivity",
          "matches": "@[clickable=true] >2 [text=\"关注的人\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6ef5bbf7-bb11-4cbb-b46b-bdc7c333a617",
          "snapshotUrls": "https://i.gkd.li/i/18423013"
        }
      ],
      "enable": false
    },
    {
      "key": 26,
      "name": "分段广告-评论区博主内容推荐",
      "desc": "点击关闭-点击[不感兴趣]/[不想看到此类内容]",
      "fastQuery": true,
      "activityIds": [
        ".feed.detailrefactor.DetailPageActivity",
        ".story.gallery.feed.StoryFeedCommentsActivity2"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "@[vid=\"ll_close\"] > [text=\"推荐\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19551850",
            "https://i.gkd.li/i/19552278"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "matchRoot": true,
          "matches": "[text$=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19551857",
            "https://i.gkd.li/i/19552282",
            "https://i.gkd.li/i/24211723"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 27,
      "name": "分段广告-评论区荐读",
      "fastQuery": true,
      "activityIds": [
        ".feed.detailrefactor.DetailPageActivity",
        ".feed.DetailWeiboActivity",
        ".feed.halfcontainer.HalfContainerPageActivity"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "@[vid=\"ll_close\"] > [text=\"荐读\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/bab872e2-6967-49f5-8443-46af8f225d8f",
          "snapshotUrls": [
            "https://i.gkd.li/i/21828298",
            "https://i.gkd.li/i/24237728",
            "https://i.gkd.li/i/24291674"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "matches": "[text$=\"不感兴趣\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4d35d427-f6ab-42bf-a369-65c5b602fcdf",
          "snapshotUrls": "https://i.gkd.li/i/21828292"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-兴趣领域推荐",
      "desc": "出现在长久未登录的账户再次登录时",
      "fastQuery": true,
      "activityIds": "com.sina.weibo.account.interest.InterestActivity",
      "rules": "[id=\"com.sina.weibo:id/rl_account_title_bar\"] > [id=\"com.sina.weibo:id/tv_title_bar_skip\"][text=\"跳过\"]",
      "snapshotUrls": "https://i.gkd.li/import/12531405",
      "enable": false
    },
    {
      "key": 4,
      "name": "全屏广告-精选博主推荐",
      "desc": "出现在长久未登录的账户再次登录时",
      "fastQuery": true,
      "activityIds": "com.sina.weibo.account.recommend.RecommendActivity",
      "rules": [
        "[id=\"com.sina.weibo:id/tv_option\"&&text=\"取消勾选\"]",
        "[id=\"com.sina.weibo:id/new_next_btn\"&&text=\"进入微博（已选0个）\"]"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/import/12531433",
        "https://i.gkd.li/import/12531434"
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "局部广告-博文内容区与评论区中间卡片式广告",
      "desc": "点击右上角x",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[id=\"com.sina.weibo:id/left_img_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/12673043"
        },
        {
          "key": 1,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[id=\"com.sina.weibo:id/left_video_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13635551"
        },
        {
          "key": 2,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[id=\"com.sina.weibo:id/corner_marker_view\"] >2 [id=\"com.sina.weibo:id/right_top_tag\"]",
          "snapshotUrls": "https://i.gkd.li/import/12673051"
        },
        {
          "key": 3,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[id=\"com.sina.weibo:id/tvTrendsTitle\"] + [id=\"com.sina.weibo:id/iv_ad_x\"]",
          "snapshotUrls": "https://i.gkd.li/import/13787207"
        }
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 6,
      "name": "局部广告-评论区博主内容推荐",
      "desc": "评论区同一博主其他博文推荐",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "matches": "RelativeLayout[visibleToUser=true] - RelativeLayout >n @[id=\"com.sina.weibo:id/ll_close\"] > [id=\"com.sina.weibo:id/tv_tips\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12674498",
            "https://i.gkd.li/import/13035647"
          ]
        },
        {
          "preKeys": 0,
          "activityIds": [
            "com.sina.weibo.utils.WeiboDialog$CustomDialog",
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "matches": "TextView[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12674511",
            "https://i.gkd.li/import/12929591"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-首页顶部话题分享窗口",
      "fastQuery": true,
      "activityIds": [
        "com.sina.weibo.MainTabActivity"
      ],
      "rules": "[id=\"com.sina.weibo:id/tvGuide\"] + [id=\"com.sina.weibo:id/v_close\"] + [id=\"com.sina.weibo:id/iv_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12705972"
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3000,
      "name": "全屏广告-请求开启通知弹窗",
      "desc": "自动点击暂不开启",
      "fastQuery": true,
      "activityIds": [
        "com.sina.weibo.notifyguidev2.NotifyGuideV2Activity"
      ],
      "rules": "@[id=\"com.sina.weibo:id/bt_cancel\"][text=\"暂不开启\"] + [id=\"com.sina.weibo:id/bt_confirm\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12705979"
      ]
    },
    {
      "enable": false,
      "key": 10,
      "name": "全屏广告-请求开启通知提示信息",
      "desc": "自动点击x按钮",
      "fastQuery": true,
      "activityIds": [
        "com.sina.weibo.MainTabActivity"
      ],
      "rules": "[text^=\"打开通知\"] < LinearLayout + ImageView[id=\"com.sina.weibo:id/right_icon\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12705986"
      ]
    },
    {
      "enable": false,
      "key": 11,
      "name": "局部广告-首页顶部签到卡片",
      "desc": "自动点击x按钮",
      "fastQuery": true,
      "activityIds": [
        "com.sina.weibo.MainTabActivity"
      ],
      "rules": "[id=\"com.sina.weibo:id/ll_check_in_container\"] < FrameLayout - FrameLayout > TextView + [id=\"com.sina.weibo:id/v_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12749876"
      ]
    },
    {
      "key": 13,
      "name": "局部广告-悬浮广告",
      "desc": "自动点击x按钮",
      "fastQuery": true,
      "activityIds": "com.sina.weibo.MainTabActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >2 [id=\"com.sina.weibo:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12750118"
        },
        {
          "key": 1,
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >n [id=\"com.sina.weibo:id/closeView\"]",
          "snapshotUrls": "https://i.gkd.li/import/13206775"
        },
        {
          "key": 2,
          "matches": "[id=\"com.sina.weibo:id/tv_tag\"] + @*[clickable=true] + [id=\"com.sina.weibo:id/countdown_btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13206841"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-请求定位权限弹窗",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            "com.sina.weibo.MainTabActivity",
            "com.sina.weibo.utils.WeiboDialog$CustomDialog"
          ],
          "matches": "@[text=\"以后再说\"] + * + [text=\"去开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13218093",
            "https://i.gkd.li/import/13003311"
          ]
        },
        {
          "key": 1,
          "activityIds": "com.sina.weibo.MainTabActivity",
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "snapshotUrls": "https://i.gkd.li/import/13255595"
        }
      ],
      "enable": false
    },
    {
      "key": 15,
      "name": "局部广告-评论区底部-账号推荐关注悬浮窗",
      "desc": "点击【x】",
      "fastQuery": true,
      "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
      "rules": "@[id=\"com.sina.weibo:id/close_layout\"] - LinearLayout [id=\"com.sina.weibo:id/btnFollow\"]",
      "snapshotUrls": "https://i.gkd.li/import/13482954",
      "enable": false
    },
    {
      "key": 16,
      "name": "局部广告-评论区底部-转发推荐悬浮窗",
      "desc": "点击【x】",
      "fastQuery": true,
      "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
      "rules": "[text*=\"一键转发\"] < LinearLayout +2 [id=\"com.sina.weibo:id/tv_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13482960",
      "enable": false
    },
    {
      "key": 3002,
      "fastQuery": true,
      "name": "分段广告-评论区信息流广告",
      "desc": "点击X-点击不感兴趣",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[text=\"广告\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "snapshotUrls": "https://i.gkd.li/import/13852321"
        },
        {
          "preKeys": 0,
          "key": 1,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13852322"
        }
      ],
      "enable": false
    },
    {
      "key": 3003,
      "name": "全屏广告-APP评分弹窗",
      "desc": "点击【x】",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.sina.weibo.MainTabActivity",
      "rules": "@[text=\"不了，谢谢\"] +4 [text=\"喜欢，给好评\"]",
      "snapshotUrls": "https://i.gkd.li/import/13620220",
      "enable": false
    }
  ]
} as any);
