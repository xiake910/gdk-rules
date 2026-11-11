// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.dxy.idxyer",
  "name": "丁香园",
  "groups": [
    {
      "key": 1,
      "name": "局部广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": ".biz.main.MainActivity",
          "matches": "[vid=\"iv_image_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24851243",
            "https://i.gkd.li/i/24868496"
          ]
        },
        {
          "key": 1,
          "activityIds": ".biz.job.JobHomeActivity",
          "matches": "[vid=\"include_ad\"] > [vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24858514"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": ".biz.main.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24852395",
            "https://i.gkd.li/i/24852398"
          ]
        },
        {
          "key": 1,
          "name": "内容对你有帮助吗-反馈页面",
          "activityIds": "cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity",
          "matches": "[text*=\"有帮助吗\"] + [text*=\"参与反馈\"] +n ImageView[clickable=true][width<100 && height<100]",
          "snapshotUrls": "https://i.gkd.li/i/24995535"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "点击:x取消",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".biz.main.MainActivity",
          "matches": "[vid=\"iv_close_open_notification\"]",
          "snapshotUrls": "https://i.gkd.li/i/24877703"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-悬浮小窗播放权限",
      "desc": "点击取消",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".common.WebViewActivity",
          "matches": [
            "[text=\"开启悬浮小窗播放功能\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24865283"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-点击[继续访问]外链接",
      "desc": "丁香园安全中心",
      "rules": [
        {
          "action": "clickCenter",
          "activityIds": ".common.OuterWebViewActivity",
          "matches": "@Button[text=\"继续访问\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24845324"
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-自动点击查看答案",
      "rules": [
        {
          "key": 1,
          "name": "点击查看答案按钮",
          "activityIds": [
            ".biz.post.PostDetailActivity",
            ".biz.post.CommentDetailActivity"
          ],
          "action": "clickCenter",
          "matches": [
            "@Button[text=\" 查看答案\"][clickable=true][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/24857800",
            "https://i.gkd.li/i/24864724"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24875801"
        },
        {
          "preKeys": [
            1
          ],
          "name": "执行返回操作",
          "activityIds": ".biz.post.ShowAnswerActivity",
          "matches": "@ImageButton[desc=\"转到上一层级\"] < [vid=\"toolbar\"]",
          "snapshotUrls": "https://i.gkd.li/i/24900979"
        }
      ]
    },
    {
      "key": 7,
      "name": "功能类-自动点击[横屏]观看",
      "desc": "药品说明书-表格全屏",
      "rules": [
        {
          "key": 0,
          "activityIds": "cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity",
          "matches": "@TextView[text=\"横屏\"]",
          "snapshotUrls": "https://i.gkd.li/i/24860315"
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-自动点击查看原图",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".common.image.GalleryActivity",
          "matches": "[vid=\"iv_item_bottom_ll\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865469"
        }
      ]
    },
    {
      "key": 9,
      "name": "功能类-📋病例视频自动x0.5倍速(⚠️四选一)",
      "desc": "①调出倍速栏 ②选x0.5倍速",
      "actionMaximum": 1,
      "activityIds": ".biz.post.PostDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "①调出倍速栏",
          "action": "clickCenter",
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "preKeys": [
            0
          ],
          "name": "②选x0.5",
          "action": "clickCenter",
          "matches": "@MenuItem[text=\"0.5x\"][clickable=true]"
        }
      ]
    },
    {
      "key": 10,
      "name": "功能类-📋病例视频自动x0.8倍速(⚠️四选一)",
      "desc": "①调出倍速栏 ②选x0.8倍速",
      "actionMaximum": 1,
      "activityIds": ".biz.post.PostDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "①调出倍速栏",
          "action": "clickCenter",
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]"
        },
        {
          "preKeys": [
            0
          ],
          "name": "②选x0.8",
          "action": "clickCenter",
          "matches": "@MenuItem[text=\"0.8x\"][clickable=true]"
        }
      ]
    },
    {
      "key": 11,
      "name": "功能类-📋病例视频自动x1.5倍速(⚠️四选一)",
      "desc": "①调出倍速栏 ②选x1.5倍速",
      "actionMaximum": 1,
      "activityIds": ".biz.post.PostDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "①调出倍速栏",
          "action": "clickCenter",
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]"
        },
        {
          "preKeys": [
            0
          ],
          "name": "②选x1.5",
          "action": "clickCenter",
          "matches": "@MenuItem[text=\"1.5x\"][clickable=true]"
        }
      ]
    },
    {
      "key": 12,
      "name": "功能类-📋病例视频自动x2.0倍速(⚠️四选一)",
      "desc": "①调出倍速栏 ②选x2.0倍速",
      "actionMaximum": 1,
      "activityIds": ".biz.post.PostDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "①调出倍速栏",
          "action": "clickCenter",
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]"
        },
        {
          "preKeys": [
            0
          ],
          "name": "②选x2.0",
          "action": "clickCenter",
          "matches": "@MenuItem[text=\"2x\"][clickable=true]"
        }
      ]
    },
    {
      "key": 13,
      "name": "功能类-📖课程视频自动x1.2倍速(❗三选一)",
      "desc": "我们导师再也不卡壳啦",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24866929"
        }
      ]
    },
    {
      "key": 14,
      "name": "功能类-📖课程视频自动x1.5倍速(❗三选一)",
      "desc": "显著提高讲师效率",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 300,
          "actionMaximum": 2,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24866929"
        }
      ]
    },
    {
      "key": 15,
      "name": "功能类-📖课程视频自动x2.0倍速(❗三选一)",
      "desc": "导师讲到冒烟不带停",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 300,
          "actionMaximum": 3,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24866758"
        }
      ]
    },
    {
      "key": 16,
      "name": "功能类-自动解除医学领域图片内容",
      "desc": "查看-返回操作",
      "rules": [
        {
          "key": 0,
          "activityIds": ".biz.post.PostDetailActivity",
          "action": "clickCenter",
          "matches": "[childCount=9] >2 [desc^=\"涉及医学专业领域的\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25459917"
        },
        {
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "activityIds": ".common.WebViewActivity",
          "matches": "[vid=\"toolbar\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/25459975"
        }
      ]
    },
    {
      "key": 3000,
      "name": "功能类-丁香园安全中心-自动点击继续访问",
      "rules": [
        {
          "key": 0,
          "action": "clickCenter",
          "activityIds": ".common.OuterWebViewActivity",
          "matches": "@Button[text=\"继续访问\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24845324"
        }
      ]
    },
    {
      "key": 3001,
      "name": "功能类-药品说明书-表格全屏自动横屏观看",
      "rules": [
        {
          "key": 0,
          "activityIds": "cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity",
          "matches": "@TextView[text=\"横屏\"]",
          "snapshotUrls": "https://i.gkd.li/i/24860315"
        }
      ]
    },
    {
      "key": 3002,
      "name": "功能类-📋病例视频自动慢速x0.5_选你想要的但不要多选!",
      "desc": "适合CT,MRI影像学深入分析",
      "actionMaximum": 1,
      "activityIds": ".biz.post.PostDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "调出倍速栏",
          "action": "clickCenter",
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "使用x0.5",
          "action": "clickCenter",
          "matches": "@MenuItem[text=\"0.5x\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        }
      ]
    },
    {
      "key": 3003,
      "name": "功能类-📋病例视频自动慢速x0.8_选你想要的但不要多选!",
      "desc": "适合CT,MRI影像学深入分析",
      "actionMaximum": 1,
      "activityIds": ".biz.post.PostDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "调出倍速栏",
          "action": "clickCenter",
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "使用x0.8",
          "action": "clickCenter",
          "matches": "@MenuItem[text=\"0.8x\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        }
      ]
    },
    {
      "key": 3004,
      "name": "功能类-📋病例视频自动倍速x1.5_选你想要的但不要多选!",
      "desc": "提高观看效率",
      "actionMaximum": 1,
      "activityIds": ".biz.post.PostDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "调出倍速栏",
          "action": "clickCenter",
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "使用x1.5",
          "action": "clickCenter",
          "matches": "@MenuItem[text=\"1.5x\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        }
      ]
    },
    {
      "key": 3005,
      "name": "功能类-📋病例视频自动倍速x2.0_选你想要的但不要多选!",
      "desc": "极限观看效率",
      "actionMaximum": 1,
      "activityIds": ".biz.post.PostDetailActivity",
      "rules": [
        {
          "key": 0,
          "name": "调出倍速栏",
          "action": "clickCenter",
          "matches": "[text=\"Playback Rate\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "使用x2.0",
          "action": "clickCenter",
          "matches": "@MenuItem[text=\"2x\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24865795"
        }
      ]
    },
    {
      "key": 3006,
      "name": "功能类-📖课程视频自动倍速x1.2⚠️选你想要的但不要多选!",
      "desc": "我们导师再也不卡壳啦",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24866929"
        }
      ]
    },
    {
      "key": 3007,
      "name": "功能类-📖课程视频自动倍速x1.5⚠️选你想要的但不要多选",
      "desc": "显著提高讲师效率",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 300,
          "actionMaximum": 2,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24866929"
        }
      ]
    },
    {
      "key": 3008,
      "name": "功能类-📖课程视频自动倍速x2.0⚠️选你想要的但不要多选",
      "desc": "导师讲到冒烟不带停",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 300,
          "actionMaximum": 3,
          "activityIds": ".openclass.biz.video.detail.VideoDetailActivity",
          "matches": "[vid=\"play_speed\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24866758"
        }
      ]
    }
  ]
} as any);
