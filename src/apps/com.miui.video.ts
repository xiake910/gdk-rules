// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.video",
  "name": "小米视频",
  "groups": [
    {
      "key": 1,
      "name": "分段广告-卡片广告",
      "desc": "该广告的第二段需开启[智能服务]的对应规则才能关闭",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            ".feature.detail.NewShortVideoDetailActivity",
            ".feature.detail.NewLongVideoDetailActivityV2"
          ],
          "matches": "[vid=\"pause_ad_close_img\" || vid=\"iv_ad\" || vid=\"v_banner_bottom_right\" || vid=\"ad_close\" || vid=\"v_banner_bottomright\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/cd25f4a5-64db-4471-8eea-3d84a34ffb72",
          "snapshotUrls": [
            "https://i.gkd.li/i/16044569",
            "https://i.gkd.li/i/25323739",
            "https://i.gkd.li/i/25404935",
            "https://i.gkd.li/i/25404805"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".feature.main.MainTabActivity",
            ".feature.detail.NewShortVideoDetailActivity"
          ],
          "matches": "[vid=\"ad_action_close\" || vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25404970",
            "https://i.gkd.li/i/30749182"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".feature.main.MainTabActivity",
          "matches": "[vid=\"ad_logo\"] +2 ImageView[vid=\"v_icon\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30749781",
            "https://i.gkd.li/i/30749782"
          ],
          "exampleUrls": "https://e.gkd.li/af353485-0109-4247-9e04-642492b3df16"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-视频列表广告",
      "fastQuery": true,
      "activityIds": ".feature.detail.NewShortVideoDetailActivity",
      "rules": [
        {
          "matches": "@ImageView[id=\"com.miui.video:id/iv_close\"][visibleToUser=true] - [text=\"立即下载\"] - ImageView[id=\"com.miui.video:id/download_icon\"] < [id=\"com.miui.video:id/v_download\"]",
          "snapshotUrls": "https://i.gkd.li/i/25323739"
        }
      ],
      "enable": false
    }
  ]
} as any);
