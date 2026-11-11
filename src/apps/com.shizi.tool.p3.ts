// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shizi.tool.p3",
  "name": "动漫共和国",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "fastQuery": true,
      "matchRoot": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "[vid=\"tobid_splash_skip_ll\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/22136545"
        },
        {
          "key": 1,
          "matches": "[vid=\"ms_skipView\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/23925246"
        },
        {
          "key": 2,
          "matches": "[text*=\"跳过\"][text.length<10][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/30903944",
          "excludeSnapshotUrls": "https://i.gkd.li/i/30905793"
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 2,
      "name": "全屏广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": "com.windmill.sdk.widget.InterstitialView",
          "matches": "[vid=\"tobid_interstitial_skip_ll\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/8405053f-ebb9-4915-b8c7-499fcaa953ff",
          "snapshotUrls": "https://i.gkd.li/i/23925245"
        },
        {
          "key": 1,
          "fastQuery": true,
          "activityIds": "com.beizi.ad.internal.activity.BeiZiInterstitialActivity",
          "matches": "[vid=\"beizi_interstitial_ad_close_container_rl\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4ed42cae-88b2-4429-93ba-237bdf221f80",
          "snapshotUrls": "https://i.gkd.li/i/24541547"
        },
        {
          "key": 2,
          "fastQuery": true,
          "activityIds": "app.video.guoguo.MainActivity",
          "matches": "@[id$=\"ksad_auto_close_btn\"][visibleToUser=true] < LinearLayout < LinearLayout + FrameLayout >6 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/179028f9-ae60-4286-b746-ac2f0bb7aad6",
          "snapshotUrls": "https://i.gkd.li/i/24818734"
        },
        {
          "key": 3,
          "activityIds": "app.video.guoguo.MainActivity",
          "matches": "[desc=\"不再显示\" || desc=\"top_close_button\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25122774",
            "https://i.gkd.li/i/25491853"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
