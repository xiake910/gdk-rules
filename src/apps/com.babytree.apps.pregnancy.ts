// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.babytree.apps.pregnancy",
  "name": "宝宝树孕育",
  "groups": [
    {
      "key": 0,
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
          "snapshotUrls": "https://i.gkd.li/i/12614757"
        },
        {
          "key": 1,
          "matches": "@View[childCount=0][clickable=true][visibleToUser=true] < RelativeLayout < FrameLayout + RelativeLayout >2 [text^=\"摇一摇\"]",
          "snapshotUrls": "https://i.gkd.li/i/15566228"
        }
      ],
      "order": -10
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "activityIds": ".activity.SailfishActivity",
      "rules": [
        {
          "matches": "ImageView[vid=\"bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12614834"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-首页右侧悬浮广告",
      "activityIds": ".activity.SailfishActivity",
      "rules": [
        {
          "matches": "ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]",
          "snapshotUrls": "https://i.gkd.li/i/12614838"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-弹出广告(偶发)",
      "activityIds": "com.babytree.apps.pregnancy.activity.SailfishActivity",
      "rules": [
        {
          "matches": "ImageView[id=\"com.babytree.apps.pregnancy:id/bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/12614834"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "局部广告-首页右侧悬浮广告(偶发)",
      "activityIds": "com.babytree.apps.pregnancy.activity.SailfishActivity",
      "rules": [
        {
          "matches": "ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]",
          "snapshotUrls": "https://i.gkd.li/import/12614838"
        }
      ],
      "enable": false
    }
  ]
} as any);
