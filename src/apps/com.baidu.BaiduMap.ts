// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.BaiduMap",
  "name": "百度地图",
  "groups": [
    {
      "key": -1,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf",
          "snapshotUrls": "https://i.gkd.li/i/16556555"
        },
        {
          "key": 1,
          "matches": "[vid=\"ms_skipView\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/cd89ffb7-6cd3-4978-b3d6-ef5ece2769d0",
          "snapshotUrls": "https://i.gkd.li/i/23742641"
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 5,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "activityIds": [
        "com.baidu.mapframework.widget.BMBaseDialog",
        "com.baidu.baidumaps.MapsActivity"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "[text^=\"开启位置服务\"] + RelativeLayout > [vid=\"tv_notip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660884"
        },
        {
          "key": 1,
          "matches": "[text=\"需开启系统定位服务开关\"] +2 [vid=\"ll_dialog_btn\"] > [vid=\"tv_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660883"
        },
        {
          "key": 2,
          "matches": "ImageView[vid=\"location_dialog_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/12909299"
        }
      ],
      "enable": false
    },
    {
      "key": 7,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "ImageView[vid=\"cancel_update\"]",
          "snapshotUrls": "https://i.gkd.li/i/12909385"
        }
      ],
      "enable": false
    },
    {
      "key": 8,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "[vid=\"push_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15284736"
        }
      ],
      "enable": false
    },
    {
      "key": 9,
      "name": "功能类-通勤卡添加至桌面",
      "desc": "点击取消",
      "fastQuery": true,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": [
            "[text=\"添加至桌面\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13439258",
            "https://i.gkd.li/i/16920986"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 10,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "[vid=\"img_close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22616256"
        }
      ],
      "enable": false
    },
    {
      "key": 11,
      "name": "局部广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "[vid=\"banner_ad_close_icon\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22656085"
        },
        {
          "key": 1,
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/22616267"
        },
        {
          "key": 2,
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "ImageView[vid=\"yellow_banner_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/24633179"
        }
      ],
      "enable": false
    },
    {
      "key": 1,
      "name": "局部广告-地图上方黄页横幅",
      "fastQuery": true,
      "activityIds": [
        "com.baidu.baidumaps.MapsActivity",
        "com.android.packageinstaller.permission.ui.GrantPermissionsActivity",
        "com.lbe.security.ui.CountdownDialogActivity"
      ],
      "rules": "ImageView[id=\"com.baidu.BaiduMap:id/yellow_banner_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12642301",
        "https://i.gkd.li/import/12801465",
        "https://i.gkd.li/import/12909281"
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-打车界面-右侧悬浮球",
      "fastQuery": true,
      "activityIds": "com.baidu.baidumaps.MapsActivity",
      "rules": "RelativeLayout[id=\"com.baidu.BaiduMap:id/rl_close_content\"]",
      "snapshotUrls": "https://i.gkd.li/import/12642307",
      "enable": false
    },
    {
      "enable": false,
      "key": 3,
      "name": "全屏广告-美食大礼包弹窗",
      "fastQuery": true,
      "activityIds": "com.baidu.baidumaps.MapsActivity",
      "rules": "[text=\"美食大礼包\"] +(6) TextView[id=null][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/12642310"
    },
    {
      "enable": false,
      "key": 4,
      "name": "全屏广告-酒店提前订弹窗",
      "fastQuery": true,
      "activityIds": "com.baidu.baidumaps.MapsActivity",
      "rules": "[id=\"lottie_box\"] + TextView[id=null][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/12642319"
    },
    {
      "enable": false,
      "key": 3000,
      "name": "权限提示-请求定位弹窗",
      "fastQuery": true,
      "activityIds": [
        "com.baidu.mapframework.widget.BMBaseDialog",
        "com.baidu.baidumaps.MapsActivity"
      ],
      "rules": [
        {
          "matches": "[text^=\"开启位置服务\"] + RelativeLayout > [id=\"com.baidu.BaiduMap:id/tv_notip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/import/12660884"
        },
        {
          "matches": "[text=\"需开启系统定位服务开关\"] +2 [id=\"com.baidu.BaiduMap:id/ll_dialog_btn\"] > [id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/12660883"
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/location_dialog_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/import/12909299"
        }
      ]
    },
    {
      "enable": false,
      "key": 6,
      "name": "全屏广告-打车界面-弹窗广告",
      "fastQuery": true,
      "activityIds": [
        "com.baidu.baidumaps.MapsActivity",
        "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
      ],
      "rules": "ImageView[id=\"com.baidu.BaiduMap:id/operational_activities_content_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12909300",
        "https://i.gkd.li/import/12930699"
      ]
    },
    {
      "enable": false,
      "key": 3001,
      "name": "权限提示-打开通知权限",
      "fastQuery": true,
      "activityIds": "com.baidu.baidumaps.MapsActivity",
      "rules": "[text=\"打开通知权限\"] <n LinearLayout + ImageView[id=\"com.baidu.BaiduMap:id/push_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13258995"
    },
    {
      "enable": false,
      "key": 3002,
      "name": "全屏广告-通勤卡-添加至桌面",
      "desc": "点击取消",
      "fastQuery": true,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "TextView[id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13439258"
        }
      ]
    }
  ]
} as any);
