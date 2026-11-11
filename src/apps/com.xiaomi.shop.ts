// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.shop",
  "name": "小米商城",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": [
            "com.xiaomi.shop2.activity.MainActivity",
            ".plugin.homepage.utils.AdDialog"
          ],
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 LinearLayout[childCount=2] < RelativeLayout < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12649330",
            "https://i.gkd.li/i/14393039"
          ]
        },
        {
          "key": 1,
          "fastQuery": true,
          "activityIds": "com.xiaomi.shop2.activity.MainActivity",
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/22550140"
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "局部广告-悬浮广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xiaomi.shop2.activity.MainActivity",
          "matches": "[id=\"com.xiaomi.shop.plugin.homepage:id/home_bottom_float_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/15528092"
        }
      ],
      "enable": true
    },
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "position": {
            "left": "width * 0.3509",
            "top": "width * 1.4046"
          },
          "activityIds": ".lib.ForceUpdateActivity",
          "matches": "@LinearLayout[childCount=0] < [id=\"android:id/content\"][childCount=1] < [vid=\"action_bar_root\"]",
          "snapshotUrls": "https://i.gkd.li/i/19547338"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "评价提示-客服",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.miot.store.mirn.RNMainActivity",
          "matches": "ImageView < @ViewGroup[clickable=true] - [text^=\"请对\"][text$=\"进行评价\"]",
          "snapshotUrls": "https://i.gkd.li/i/23206873"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.xiaomi.shop.plugin.homepage.utils.AdDialog",
      "rules": "LinearLayout[childCount=2] > ImageView[id=null] + ImageView[id=null][clickable=true]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12649330"
      ],
      "enable": true
    }
  ]
} as any);
