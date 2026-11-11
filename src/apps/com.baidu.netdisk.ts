// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.netdisk",
  "name": "百度网盘",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "key": 3,
          "activityIds": [
            ".business.guide.dialog.lifeproduct.",
            ".ui.MainActivity",
            ".ui.Navigate"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642505",
            "https://i.gkd.li/i/12783106",
            "https://i.gkd.li/i/12923937",
            "https://i.gkd.li/i/13806852",
            "https://i.gkd.li/i/14730106",
            "https://i.gkd.li/i/14822799"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 1,
          "fastQuery": true,
          "activityIds": ".video.VideoPlayerActivity",
          "matches": "[vid=\"rl_ad_root\"] > [vid=\"iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/5e0625e3-ef3b-4a71-a222-54728c2274b0",
          "snapshotUrls": "https://i.gkd.li/i/20414230"
        }
      ],
      "enable": false
    },
    {
      "key": 6,
      "name": "更新提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".ui.MainActivity",
            ".ui.cloudp2p.RichMediaActivity",
            ".module.sharelink.ChainVerifyActivity"
          ],
          "matches": "[text=\"立即更新\"] -(1,2) [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16118181",
            "https://i.gkd.li/i/24834209",
            "https://i.gkd.li/i/26574534",
            "https://i.gkd.li/i/33673328"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 8,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": [
            "[text=\"开启推送提醒\"]",
            "[text=\"暂不开启\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/25904597"
        }
      ],
      "enable": false
    },
    {
      "key": 9,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".ui.MainActivity",
      "rules": [
        {
          "matches": "[vid=\"view_score_style\"] > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14317054"
        }
      ],
      "enable": false
    },
    {
      "key": 12,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"float_btn_close\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/470eec82-ed99-4f50-beba-2587e525cfdf",
          "snapshotUrls": "https://i.gkd.li/i/14278618"
        }
      ],
      "enable": false
    },
    {
      "key": 13,
      "name": "分段广告-暂不开启自动备份",
      "fastQuery": true,
      "activityIds": [
        ".ui.NewQuickSettingsActivity",
        ".ui.RepeatedNewQuickSettingsActivity"
      ],
      "rules": [
        {
          "key": 0,
          "matches": [
            "[text=\"开启安全备份\"][visibleToUser=true]",
            "[text=\"暂不开启\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/e227fa57-f728-4ba4-8fff-493751bc5035",
          "snapshotUrls": [
            "https://i.gkd.li/i/22401064",
            "https://i.gkd.li/i/25903980"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "matches": "[text=\"立即开启\"] - [text=\"暂不开启\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/aa9782d4-304f-401b-89f6-4fae703b8280",
          "snapshotUrls": [
            "https://i.gkd.li/i/22401070",
            "https://i.gkd.li/i/25903983"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-活动弹窗",
      "desc": "关闭各种活动弹窗信息",
      "fastQuery": true,
      "rules": [
        {
          "key": 1,
          "name": "一刻相册推广弹窗",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "matches": "[id=\"com.baidu.netdisk:id/cl_content\"] - [id=\"com.baidu.netdisk:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642505"
          ]
        },
        {
          "key": 2,
          "name": "VIP弹窗",
          "activityIds": "com.baidu.netdisk.business.guide.dialog.lifeproduct.",
          "matches": "[id=\"com.baidu.netdisk:id/view_content_bg2\"] - [id=\"com.baidu.netdisk:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12923937"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-首页banner广告",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "fastQuery": true,
      "rules": "[id=\"com.baidu.netdisk:id/banner_item_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12706544",
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-首页热门广告",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "fastQuery": true,
      "rules": "[id=\"com.baidu.netdisk:id/vf_content\"] + [id=\"com.baidu.netdisk:id/close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12706544",
      "enable": false
    },
    {
      "key": 4,
      "name": "全屏广告-我的页面-限时福利",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "fastQuery": true,
      "rules": "@TextView + [text=\"专属福利\"]",
      "snapshotUrls": "https://i.gkd.li/import/12706549",
      "enable": false
    },
    {
      "key": 5,
      "name": "全屏广告-相册页面-激活无限空间弹窗",
      "fastQuery": true,
      "activityIds": "com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog",
      "rules": "@ImageView[id=\"com.baidu.netdisk:id/close_btn\"] + ImageView[id=\"com.baidu.netdisk:id/bg_image\"]",
      "snapshotUrls": "https://i.gkd.li/import/12648987",
      "enable": false
    },
    {
      "key": 7,
      "name": "全屏广告-续费横幅提示",
      "desc": "关闭续费横幅提示",
      "fastQuery": true,
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": [
        {
          "matches": "View[desc=\"续费\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/12924036"
        }
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3002,
      "name": "权限提示-开启消息通知弹窗",
      "desc": "自动点击关闭",
      "fastQuery": true,
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": "ImageView[id=\"com.baidu.netdisk:id/dialog_cancel\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12923936"
      ]
    },
    {
      "enable": false,
      "key": 10,
      "name": "全屏广告-看视频免费享极速下载弹窗",
      "desc": "自动点击x按钮",
      "fastQuery": true,
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": "ViewGroup > [id=\"com.baidu.netdisk:id/background_image\"] +n [id=\"com.baidu.netdisk:id/iv_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12783106"
    },
    {
      "key": 11,
      "fastQuery": true,
      "name": "全屏广告-幸运券包弹窗",
      "desc": "自动点击关闭",
      "activityIds": "com.baidu.netdisk.ui.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk:id/tv_title\"][text^=\"恭喜获得\"] -3 ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13806852"
        }
      ],
      "enable": false
    }
  ]
} as any);
