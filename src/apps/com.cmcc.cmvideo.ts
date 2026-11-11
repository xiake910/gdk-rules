// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmcc.cmvideo",
  "name": "咪咕视频",
  "groups": [
    {
      "key": 2,
      "name": "局部广告",
      "desc": "点击x掉",
      "fastQuery": true,
      "activityIds": "com.cmvideo.capability.mglivependant.palyerdetail.service.SingleTaskActivity",
      "rules": [
        {
          "key": 0,
          "activityIds": ".main.application.CompatibleMainActivity",
          "matches": "[vid=\"iv_right_bottom_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12498315"
        },
        {
          "key": 1,
          "name": "首页",
          "activityIds": ".main.application.CompatibleMainActivity",
          "matches": "@ImageView[clickable=true][width<114 && height<114] - RecyclerView[width<500 && height<500] <<(1,2) FrameLayout - [vid=\"root_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27367393",
            "https://i.gkd.li/i/27382399"
          ]
        },
        {
          "key": 2,
          "name": "直播预约",
          "activityIds": ".main.application.CompatibleMainActivity",
          "matches": "ImageView <(1,2) @[clickable=true][width<75 && height<75][childCount=2] - [vid=\"h5_content_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27367465",
            "https://i.gkd.li/i/27375928"
          ]
        },
        {
          "key": 3,
          "activityIds": "com.cmvideo.capability.vod.VodActivity",
          "matches": "[vid=\"iv_close\" || text=\"广告\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27367662"
        },
        {
          "key": 4,
          "name": "横屏播放页",
          "matches": "@ImageView[clickable=true][width<114 && height<114] <(2,3) FrameLayout <<(1,2) [vid=\"fl_container\"][width<500 && height<500]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27330895",
            "https://i.gkd.li/i/27382514"
          ]
        },
        {
          "key": 5,
          "name": "横屏播放页",
          "matches": "[vid=\"lv_ad_mark\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27382514"
        },
        {
          "key": 6,
          "name": "直播间",
          "matches": "[vid=\"gift_pop_close\"][desc*=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/27368007"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"btn_update_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276116"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276127"
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-首页",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matchRoot": true,
          "activityIds": ".main.application.CompatibleMainActivity",
          "matches": "[vid=\"iv_big_close\" || vid=\"close_bg_single\"]",
          "exampleUrls": [
            "https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb",
            "https://e.gkd.li/5a577aa5-7d8a-4f7b-8a4a-230263775fbc"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16503612",
            "https://i.gkd.li/i/27368845"
          ]
        }
      ]
    },
    {
      "key": 6,
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.cmvideo.capability.vod.VodActivity",
          "matches": "@[vid=\"rating_Bar\"][childCount=5] <4 [vid=\"mg_share_dialog_root\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/27368603",
          "exampleUrls": "https://e.gkd.li/aff1fce9-4295-406f-9a56-c26090b57abb"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-右下角小广告",
      "fastQuery": true,
      "activityIds": "com.cmcc.cmvideo.main.application.CompatibleMainActivity",
      "rules": "[id=\"com.cmcc.cmvideo:id/iv_right_bottom_close\"]",
      "snapshotUrls": "https://i.gkd.li/i/12498315"
    },
    {
      "key": 3001,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matchRoot": true,
          "activityIds": "com.cmcc.cmvideo.main.application.CompatibleMainActivity",
          "matches": "[vid=\"iv_big_close\"]",
          "exampleUrls": "https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb",
          "snapshotUrls": "https://i.gkd.li/i/16503612"
        }
      ]
    },
    {
      "key": 1,
      "name": "青少年模式",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": "[id=\"com.cmcc.cmvideo:id/btn_cancle\"]",
      "snapshotUrls": "https://i.gkd.li/import/12498307",
      "enable": false
    },
    {
      "key": 3002,
      "name": "权限提示-推送通知权限弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": "[id=\"com.cmcc.cmvideo:id/base_dialog_left_btn\"][text=\"以后再说\"]",
      "snapshotUrls": "https://i.gkd.li/import/13276127",
      "enable": false
    }
  ]
} as any);
