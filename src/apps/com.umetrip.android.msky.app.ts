// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.umetrip.android.msky.app",
  "name": "航旅纵横",
  "groups": [
    {
      "key": 10,
      "name": "其他-进入飞行模式-提示弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "matches": "[vid=\"imageView\"] + [vid=\"iv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12750185"
        }
      ],
      "enable": false
    },
    {
      "key": 11,
      "name": "局部广告-首页右侧悬浮广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "matches": "@[vid=\"iv_close_envelope\"] + [vid=\"media_view_envelope\"]",
          "snapshotUrls": "https://i.gkd.li/i/12783264"
        }
      ],
      "enable": true
    },
    {
      "key": 12,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true][width=height] < FrameLayout <2 FrameLayout <3 FrameLayout < [vid=\"operation_dialog_weex_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/24706615"
        }
      ],
      "enable": true
    },
    {
      "enable": true,
      "key": 8,
      "name": "全屏广告-酒店-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.ume.lib_weex.view.WeexActivity",
      "rules": "View[desc=\"立即预订\"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]",
      "snapshotUrls": "https://i.gkd.li/import/12909632"
    },
    {
      "enable": false,
      "key": 9,
      "name": "更新提示-首页-升级提示",
      "fastQuery": true,
      "activityIds": [
        "com.miui.home.launcher.Launcher",
        "com.umetrip.android.msky.homepage.activity.UmeHomeActivity"
      ],
      "rules": "@[id=\"com.umetrip.android.msky.app:id/iv_cancel\"] - * > [id=\"com.umetrip.android.msky.app:id/btn_upgrade\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12838294",
        "https://i.gkd.li/import/12838293"
      ]
    },
    {
      "enable": true,
      "key": 3000,
      "name": "全屏广告-进入飞行模式-提示弹窗",
      "fastQuery": true,
      "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
      "rules": "[id=\"com.umetrip.android.msky.app:id/imageView\"] + [id=\"com.umetrip.android.msky.app:id/iv_cancel\"]",
      "snapshotUrls": "https://i.gkd.li/import/12750185"
    }
  ]
} as any);
