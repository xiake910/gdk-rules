// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hupu.shihuo",
  "name": "识货",
  "groups": [
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"去开启\"] + [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13704887"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": "com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity",
          "matches": "[vid=\"fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13115664"
        }
      ]
    },
    {
      "key": 4,
      "name": "更新提示",
      "desc": "点击[以后再说]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.shizhi.shihuoapp.module.main.ui.main.MainActivity",
          "matches": "[text=\"发现新版本\"] +2 ViewGroup > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14052208"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-请求消息通知",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.shizhi.shihuoapp.module.main.ui.main.MainActivity",
      "rules": "[text^=\"通知分类\"] +n ImageView[id=\"com.hupu.shihuo:id/ivClose\"]",
      "snapshotUrls": "https://i.gkd.li/import/13704887",
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-广告弹窗",
      "desc": "点击左上角x关闭",
      "activityIds": "com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity",
      "rules": "[id=\"com.hupu.shihuo:id/fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
      "snapshotUrls": "https://i.gkd.li/import/13115664",
      "enable": false
    }
  ]
} as any);
