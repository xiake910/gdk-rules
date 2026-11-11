// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.taobao.etao",
  "name": "一淘",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": ".app.homev4.HomeV4Activity",
      "rules": [
        {
          "key": 0,
          "matches": "@ImageView[width<150 && height<150] <2 FrameLayout < [vid=\"dialog_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/30859236"
        },
        {
          "key": 1,
          "matches": "ImageView[width<150 && height<150] < @[clickable=true] + [vid=\"dialog_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/30859577"
        },
        {
          "key": 2,
          "matches": "@View[id=null][visibleToUser=true][width<150 && height<150][parent.childCount=3] <<n [vid=\"dialog_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/30859628"
        },
        {
          "key": 3,
          "activityIds": ".app.home.view.NewHomeActivity",
          "matches": "ImageView[width<150 && height<150] < @RelativeLayout[clickable=true][childCount=1] <2 [childCount=2] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/30859526"
        }
      ],
      "enable": true
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "desc": "点击x掉",
      "actionMaximum": 3,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.taobao.sns.app.message.MessageActivity",
            ".mine.MetaXMineActivity",
            ".app.homev4.HomeV4Activity"
          ],
          "matches": "@[text=null][clickable=true][width<150][childCount=0] -(1,2) [text*=\"开\"][text*=\"通知\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12684278",
            "https://i.gkd.li/i/12684351",
            "https://i.gkd.li/i/30634250"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 1,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[text=\"更新提示\"] <<2 * +2 * >2 [text=\"取消\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12684250",
        "https://i.gkd.li/import/12727457",
        "https://i.gkd.li/import/12684244"
      ],
      "enable": false
    },
    {
      "enable": true,
      "key": 3000,
      "name": "全屏广告-请求打开系统通知提示信息",
      "desc": "自动点击提示信息的x按钮",
      "rules": [
        {
          "activityIds": [
            "com.taobao.sns.app.message.MessageActivity"
          ],
          "matches": "[text^=\"打开消息通知\"] + [text=\"去开启\"] + ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12684278"
          ]
        },
        {
          "activityIds": [
            "com.taobao.etao.mine.MetaXMineActivity"
          ],
          "matches": "[text^=\"打开消息通知\"] + FrameLayout > [text=\"去开启\"] < FrameLayout + ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12684351"
          ]
        }
      ]
    }
  ]
} as any);
