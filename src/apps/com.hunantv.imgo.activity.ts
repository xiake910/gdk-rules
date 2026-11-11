// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hunantv.imgo.activity",
  "name": "芒果TV",
  "groups": [
    {
      "key": 1,
      "name": "分段广告-首页推荐广告",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "@[vid=\"layout_logo\"] > [vid=\"tv_ad_logo\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472616"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "[vid=\"close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472615"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"imgPromotion\"] + [vid=\"vClosePromotionView\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818464"
        },
        {
          "key": 1,
          "activityIds": ".MainActivity",
          "matches": "@TextView[id=null][text=\"\"] - View > Image[id=\"hotGif\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818528"
        },
        {
          "key": 2,
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "matches": "[vid=\"ivPromotion\"] + [vid=\"btnClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761169"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-右侧悬浮广告",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "@[vid=\"apperience_close\"] + [vid=\"apperience_enter\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818430"
        },
        {
          "key": 1,
          "matches": "@[vid=\"iv_float_close\"] + [vid=\"iv_float_content\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818481"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-视频播放时的广告",
      "desc": "点击[关闭广告]",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": "com.mgtv.ui.videoplay.MGVideoPlayActivity",
          "matches": "[text=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/386d0906-f81f-43d2-af7f-adc3ab0ea5a6",
          "snapshotUrls": "https://i.gkd.li/i/14322017"
        }
      ]
    },
    {
      "key": 0,
      "name": "青少年模式",
      "activityIds": [
        "com.hunantv.imgo.activity.MainActivity",
        "miuix.appcompat.app.m"
      ],
      "rules": "[id=\"com.hunantv.imgo.activity:id/llSetAgeMode\"] + [id=\"com.hunantv.imgo.activity:id/btnIknow\"]",
      "snapshotUrls": "https://i.gkd.li/import/12832447",
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-首页推荐流-卡片广告",
      "activityIds": "com.hunantv.imgo.activity.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "@[id=\"com.hunantv.imgo.activity:id/layout_logo\"] > [id=\"com.hunantv.imgo.activity:id/tv_ad_logo\"]",
          "snapshotUrls": "https://i.gkd.li/import/12472616"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "[id=\"com.hunantv.imgo.activity:id/close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/import/12472615"
        }
      ],
      "enable": false
    }
  ]
} as any);
