// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dianping.v1",
  "name": "大众点评",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-主页推荐关注弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.dianping.main.guide.SplashActivity",
          "matches": "FrameLayout[id=\"android:id/content\"] >2 FrameLayout > ImageView + FrameLayout[id=null][desc=\"关闭\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12727011"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"去开启\"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12727070"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "局部广告-关闭[签到开红包]",
      "desc": "点击右下角悬浮图片右上角的x图标",
      "activityIds": [
        ".NovaMainActivity"
      ],
      "rules": "[vid=\"float_image\"] + [vid=\"close\"][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/i/12727366",
      "enable": false
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "key": 0,
          "activityIds": ".NovaMainActivity",
          "fastQuery": true,
          "matches": "[vid=\"operate_cross_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538340"
        }
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "分段广告-推荐页卡片广告",
      "rules": [
        {
          "key": 0,
          "activityIds": ".NovaMainActivity",
          "matches": "@[desc=\"reculike_delete\"][clickable=true][visibleToUser=true] +3 [childCount=2]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13759369",
            "https://i.gkd.li/i/14332054"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "action": "clickCenter",
          "activityIds": ".NovaMainActivity",
          "matches": "@[clickable=true] > [text=\"重复出现\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14238381",
            "https://i.gkd.li/i/14269115"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "key": 2,
          "fastQuery": true,
          "activityIds": ".NovaMainActivity",
          "matches": "[text$=\"重复出现\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/010c0314-e89b-468f-8143-691925a308a6",
          "snapshotUrls": "https://i.gkd.li/i/14393256"
        }
      ],
      "enable": false
    },
    {
      "key": 6,
      "name": "功能类-选择地图时自动点击[更多]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.dianping.nova.picasso.DPPicassoBoxActivity",
          "matches": [
            "[text=\"请选择地图\"][visibleToUser=true]",
            "@[clickable=true] > [text^=\"更多\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/ce751918-dab2-4670-a608-9edbcb3bdc0e",
          "snapshotUrls": "https://i.gkd.li/i/23289239"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-消息页上方开启系统通知提醒",
      "activityIds": [
        "com.dianping.main.guide.SplashActivity"
      ],
      "rules": {
        "matches": "[text=\"去开启\"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView",
        "action": "clickCenter"
      },
      "snapshotUrls": "https://i.gkd.li/import/12727070",
      "enable": false
    },
    {
      "key": 3001,
      "name": "局部广告-卡片式广告",
      "rules": [
        {
          "key": 0,
          "name": "推荐页卡片广告",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "matches": "[desc=\"reculike_delete\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/13759369"
        }
      ],
      "enable": false
    }
  ]
} as any);
