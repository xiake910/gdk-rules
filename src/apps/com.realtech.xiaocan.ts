// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.realtech.xiaocan",
  "name": "小蚕霸王餐",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "actionCd": 300,
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "matches": "[vid=\"box_custom\"] >2 [vid=\"ivClose\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31689742",
            "https://i.gkd.li/i/31689746"
          ]
        },
        {
          "key": 1,
          "matches": "View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13694864"
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "功能类-签到成功弹窗",
      "desc": "点击[关闭]按钮",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[id=\"android:id/content\"] >5 View[childCount=6] > ImageView[index=5][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14290847"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "权限提示-定位权限",
      "desc": "底部横幅/全屏, 点击x掉",
      "fastQuery": true,
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 0,
          "name": "横幅",
          "matches": "[vid=\"location_layout\"] > [vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/31689754",
          "exampleUrls": "https://e.gkd.li/6dd4b544-85b4-455d-9f27-0b83a95305de"
        },
        {
          "key": 1,
          "name": "全屏弹窗",
          "matches": "[vid=\"tvTitle\"] + [vid=\"tvMessage\"][text^=\"APP需要您的同意\"][text*=\"访问您的位置\"] + [childCount=2] > [vid=\"tvNegative\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/33924001",
          "exampleUrls": "https://e.gkd.li/a068a642-d226-43f5-8eb7-43e6351e0d24"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "其他-点击1次[只看可抢]",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity",
          "matches": "@[vid=\"switchBtn\"] - [text=\"只看可抢\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/31689754",
          "exampleUrls": "https://e.gkd.li/d856c10c-b772-423a-a740-73be7cc7e091"
        }
      ],
      "enable": false
    },
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 1,
          "fastQuery": true,
          "matches": "[text^=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12843368",
            "https://i.gkd.li/import/13363222",
            "https://i.gkd.li/import/13363246"
          ]
        },
        {
          "key": 2,
          "fastQuery": true,
          "matches": "@[id$=\"tt_splash_skip_btn\"] <<n [id=\"com.realtech.xiaocan:id/splash_ad_container\"]",
          "snapshotUrls": "https://i.gkd.li/import/12854728"
        },
        {
          "key": 3,
          "fastQuery": true,
          "matches": "@View[visibleToUser=true][clickable=true] <n FrameLayout[childCount=4||childCount=3] <<n [id=\"com.realtech.xiaocan:id/splash_ad_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13694858",
            "https://i.gkd.li/import/13794403"
          ]
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
