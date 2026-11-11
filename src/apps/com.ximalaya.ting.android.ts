// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ximalaya.ting.android",
  "name": "喜马拉雅",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-播放页广告",
      "fastQuery": true,
      "activityIds": ".host.activity.MainActivity",
      "rules": [
        {
          "key": 3,
          "matches": "@[visibleToUser=true] < ViewGroup[childCount=1] - ViewGroup[childCount=6] > [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/bbf93e2c-08b8-4155-b82c-89a629a62737",
          "snapshotUrls": "https://i.gkd.li/i/18500523"
        },
        {
          "key": 4,
          "actionCd": 300,
          "matches": "[vid=\"main_buy_view_yellow_zone_btn_close\" || vid=\"main_play_ad_close_real\" || vid=\"main_card_close\" || vid=\"x_play_ad_banner_close_real\"][clickable=true]",
          "exampleUrls": "https://e.gkd.li/bf820eed-00ad-47a0-9581-8cdb3d76bde5",
          "snapshotUrls": [
            "https://i.gkd.li/i/18683999",
            "https://i.gkd.li/i/24330967",
            "https://i.gkd.li/i/27471367"
          ]
        }
      ],
      "enable": true
    },
    {
      "key": 4,
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击屏蔽",
      "fastQuery": true,
      "activityIds": [
        ".host.activity.MainActivity",
        ".adsdk.view.DislikeDialog.DislikeBottomDialog"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "[vid=\"xm_ad_close_real\" || vid=\"main_close_layout\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17112326",
            "https://i.gkd.li/i/17112313"
          ]
        },
        {
          "key": 10,
          "preKeys": [
            0
          ],
          "matches": "@[clickable=true] > [text=\"屏蔽\" || text=\"直接关闭\" || text=\"不喜欢此内容\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13260487",
            "https://i.gkd.li/i/13275928",
            "https://i.gkd.li/i/17111444",
            "https://i.gkd.li/i/17111452",
            "https://i.gkd.li/i/24589005"
          ]
        },
        {
          "key": 11,
          "preKeys": [
            0
          ],
          "matches": "[text=\"直接关闭\" || text=\"不喜欢此内容\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/30309831"
        }
      ],
      "enable": true
    },
    {
      "key": 7,
      "name": "青少年模式",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".host.activity.MainActivity",
          "matches": [
            "[text*=\"青少年模式\"][vid=\"host_btn_set\"]",
            "[vid=\"host_dialog_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12506209"
        }
      ],
      "enable": false
    },
    {
      "key": 11,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": ".host.activity.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[!(text=\"定时\")] + [vid=\"main_iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13251713",
            "https://i.gkd.li/i/29967591",
            "https://i.gkd.li/i/30176023"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/30299404",
          "exampleUrls": [
            "https://e.gkd.li/8efcd568-13f2-4ac4-872a-fe6fc4affaec",
            "https://e.gkd.li/f82ca167-35a0-42b4-b955-c5ef6e5d94dd"
          ]
        },
        {
          "key": 1,
          "matches": "@[vid=\"host_close_firework\"] +2 [vid=\"host_firework_ad_tag\"]",
          "snapshotUrls": "https://i.gkd.li/i/13263421",
          "exampleUrls": "https://e.gkd.li/4f9a66b8-3bf5-4a8e-8ca6-db35625df270"
        }
      ],
      "enable": true
    },
    {
      "key": 12,
      "name": "权限提示-通知权限",
      "desc": "取消推送通知",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".host.activity.MainActivity",
          "matches": [
            "[text*=\"通知权限\"][visibleToUser=true]",
            "[text=\"取消\" || text=\"暂不开启\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/ab40c096-d024-4b7c-9c6f-245beafd373a",
          "snapshotUrls": [
            "https://i.gkd.li/i/13389145",
            "https://i.gkd.li/i/18391977",
            "https://i.gkd.li/i/20499323"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 13,
      "name": "全屏广告-免流提示",
      "desc": "关闭[开免流送会员]弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".host.activity.MainActivity",
          "matches": "[vid=\"host_iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/2a7e189b-b935-4bbd-9672-c18f2bf454e9",
          "snapshotUrls": "https://i.gkd.li/i/18326083"
        }
      ],
      "enable": true
    },
    {
      "key": 15,
      "name": "全屏广告-签到弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".host.activity.MainActivity",
          "matches": "ImageView < @[clickable=true] < [visibleToUser=true] >3 [text=\"立即签到\"]",
          "snapshotUrls": "https://i.gkd.li/i/30167710",
          "exampleUrls": "https://e.gkd.li/8b93b8fb-1d31-42d2-95a1-c76dc0186e96"
        }
      ],
      "enable": true
    },
    {
      "key": 10,
      "name": "全屏广告-首页-专辑订阅推荐弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "[text=\"你可能感兴趣的专辑\"] + [id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13251713"
        }
      ],
      "enable": true
    },
    {
      "key": 0,
      "name": "局部广告-首页右侧浮动广告",
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "rules": "[id=\"com.ximalaya.ting.android:id/main_ad_broadside_close_real\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12472620"
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "局部广告-播放页面-播放控制区域的广告",
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "rules": [
        {
          "key": 0,
          "name": "暂停按钮下方的广告",
          "matches": "[id=\"com.ximalaya.ting.android:id/x_play_ad_banner_close_real\"]",
          "snapshotUrls": "https://i.gkd.li/import/12506218"
        },
        {
          "key": 1,
          "name": "喜马小游戏广告",
          "matches": "[id=\"com.ximalaya.ting.android:id/host_game_close_tv\"]",
          "snapshotUrls": "https://i.gkd.li/import/12927110"
        },
        {
          "key": 2,
          "name": "体验会员广告",
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "exampleUrls": "https://m.gkd.li/6328439/ea870e6f-07c9-4167-ab62-03e52838110b",
          "snapshotUrls": "https://i.gkd.li/import/13546642"
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "局部广告-播放页面-底部推荐列表-夹杂广告",
      "desc": "点击关闭-点击屏蔽",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            "com.ximalaya.ting.android.main.dialog",
            "com.ximalaya.ting.android.host.activity.MainActivity"
          ],
          "matches": "@[clickable=true] > [text=\"屏蔽\"] + [text=\"关闭当前广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12506269",
            "https://i.gkd.li/import/13296565"
          ]
        },
        {
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "@[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true] > [id=\"com.ximalaya.ting.android:id/main_mark_text\"][text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12506225",
            "https://i.gkd.li/import/12701414",
            "https://i.gkd.li/import/13314183"
          ]
        }
      ],
      "enable": true
    },
    {
      "key": 3,
      "name": "全屏广告-播放页面-播放前广告",
      "fastQuery": true,
      "activityIds": [
        "com.ximalaya.ting.android.host.activity.MainActivity",
        "com.ximalaya.ting.android.framework.view.dialog"
      ],
      "rules": "[id=\"com.ximalaya.ting.android:id/main_play_ad_close_real\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12506250",
        "https://i.gkd.li/import/12520626"
      ],
      "enable": true
    },
    {
      "key": 3001,
      "name": "局部广告-首页-推荐列表广告",
      "desc": "点击关闭-点击屏蔽",
      "activityIds": [
        "com.ximalaya.ting.android.host.activity.MainActivity",
        "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog"
      ],
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_close_real\"]",
          "snapshotUrls": "https://i.gkd.li/import/12506253"
        },
        {
          "key": 1,
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_dynamic_lay\"] >(4) ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12701374"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "点击关闭原因【屏蔽】",
          "fastQuery": true,
          "matches": "@[name=\"android.widget.RelativeLayout\" || name=\"android.widget.LinearLayout\"] > [text=\"屏蔽\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12506258",
            "https://i.gkd.li/import/13260487",
            "https://i.gkd.li/import/13275928"
          ]
        }
      ],
      "enable": true
    },
    {
      "key": 5,
      "name": "局部广告-关闭热播推荐广告",
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "rules": [
        {
          "matches": "[text=\"热播推荐\"] + ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12506270"
        }
      ],
      "enable": true
    },
    {
      "key": 6,
      "name": "全屏广告-关闭更新弹窗",
      "fastQuery": true,
      "rules": "[id=\"com.ximalaya.ting.android:id/host_tv_update_later\"]",
      "snapshotUrls": "https://i.gkd.li/import/12506287",
      "enable": true
    },
    {
      "key": 8,
      "name": "局部广告-评论区广告",
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "fastQuery": true,
      "rules": "[id=\"com.ximalaya.ting.android:id/main_ad_close_real\"][visibleToUser=true]",
      "snapshotUrls": "https://i.gkd.li/import/12869426",
      "enable": true
    },
    {
      "key": 9,
      "enable": true,
      "name": "局部广告-卡片式广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "name": "我的页面-点击卡片右上角关闭按钮",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13194838",
            "https://i.gkd.li/import/13296565"
          ]
        },
        {
          "preKeys": 0,
          "key": 1,
          "name": "我的页面-点击不感兴趣",
          "activityIds": "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog",
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest\"]",
          "snapshotUrls": "https://i.gkd.li/import/13194839"
        },
        {
          "key": 2,
          "name": "有声书分类页面-点击卡片右上角关闭按钮",
          "activityIds": "com.ximalaya.ting.android.host.activity.SplashAdActivity",
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/import/13334685"
        }
      ]
    },
    {
      "key": 3002,
      "name": "全屏广告-推送通知",
      "desc": "取消推送通知",
      "rules": [
        {
          "actionMaximum": 1,
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "[id=`com.ximalaya.ting.android:id/cancel_btn`]",
          "exampleUrls": "https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df",
          "snapshotUrls": "https://i.gkd.li/import/13389145"
        }
      ],
      "enable": true
    },
    {
      "key": 3100,
      "name": "局部广告-评论区广告-补充（v12）",
      "desc": "评论区里带「广告/推广」标记的卡片，自动点右上角的关闭/不感兴趣（补充 key=8 只覆盖一个控件的情况；未在真机逐一验证，不合适可在 GKD 里关掉）",
      "enable": true,
      "fastQuery": true,
      "actionCd": 3000,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "rules": [
        {
          "key": 1,
          "name": "点关闭按钮",
          "matches": [
            "[text=\"广告\" || text=\"推广\"][visibleToUser=true] < * > [desc=\"关闭\"][clickable=true]",
            "[text=\"广告\" || text=\"推广\"][visibleToUser=true] < * > [vid*=\"close\"][visibleToUser=true]"
          ]
        },
        {
          "key": 2,
          "name": "广告标记 → 点「不感兴趣」",
          "matches": [
            "[text=\"广告\" || text=\"推广\"][visibleToUser=true] - [text=\"不感兴趣\"]",
            "[text*=\"广告\"][text.length<6][visibleToUser=true] + [text=\"不感兴趣\"][visibleToUser=true]"
          ],
          "action": "clickCenter"
        }
      ]
    }
  ]
} as any);
