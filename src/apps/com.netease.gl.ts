// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.gl",
  "name": "网易大神",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".serviceupdate.widget.DialogUpdate",
          "matches": "@[vid=\"iv_close\"] +2 LinearLayout >n [vid=\"btn_update\"]",
          "snapshotUrls": "https://i.gkd.li/i/12883135"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "key": 0,
          "activityIds": ".ui.activity.welcome.WelcomeActivity",
          "matches": "@[vid=\"iv_close\"] + [vid=\"iv_cover\"]",
          "snapshotUrls": "https://i.gkd.li/i/12883277"
        }
      ]
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".compfeed.widget.CommonWebPopupDialog",
          "matches": "@[vid=\"iv_close\"] + [text=\"开启推送\"]",
          "snapshotUrls": "https://i.gkd.li/i/13072071"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-应用内广告弹窗",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.netease.gl.ui.activity.welcome.WelcomeActivity",
          "matches": "@[id=\"com.netease.gl:id/iv_close\"] + [id=\"com.netease.gl:id/iv_cover\"]",
          "snapshotUrls": "https://i.gkd.li/import/12883277"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-请求通知权限弹窗",
      "activityIds": "com.netease.gl.compfeed.widget.CommonWebPopupDialog",
      "rules": "@[id=\"com.netease.gl:id/iv_close\"] + [text=\"开启推送\"]",
      "snapshotUrls": "https://i.gkd.li/import/13072071",
      "enable": false
    }
  ]
} as any);
