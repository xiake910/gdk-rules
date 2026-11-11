// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xtc.watch",
  "name": "小天才",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity14",
          "matches": [
            "[text=\"App功能更新了\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13197390"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "matches": [
            "[text*=\"开启消息通知\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13063274"
        },
        {
          "key": 1,
          "activityIds": ".view.home.activity.XtcHomeActivity",
          "matches": "[vid=\"iv_notify_permission_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13059965"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-弹窗提醒",
      "desc": "已知包括APP升级提醒与开启通知提醒，自动点击关闭。",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.xtc.widget.phone.popup.activity.CustomActivity14",
        "com.xtc.widget.phone.popup.activity.CustomActivity13"
      ],
      "rules": "[id=\"com.xtc.watch:id/iv_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/13197390",
        "https://i.gkd.li/import/13063274"
      ]
    },
    {
      "key": 3001,
      "name": "全屏广告-开启通知提醒",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.xtc.watch.view.home.activity.XtcHomeActivity"
      ],
      "rules": [
        {
          "matches": [
            "[id=\"com.xtc.watch:id/iv_notify_permission_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13059965"
          ]
        }
      ]
    }
  ]
} as any);
