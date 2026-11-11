// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.yunma.school.app",
  "name": "易校园",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动点击右上角扫一扫",
      "desc": "仅开屏后触发一次",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.yunma.app.ui.main.MainActivity",
          "matches": "@[clickable=true] > [vid=\"iv_scan\"]",
          "snapshotUrls": "https://i.gkd.li/i/22451914"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "功能类-用水自动点击开始",
      "rules": [
        {
          "fastQuery": true,
          "matchRoot": true,
          "activityIds": "com.yunma.baseextend.ui.WebActivity",
          "matches": "@TextView[text=\"开始\"] < [index=parent.childCount.minus(1)] <n View[childCount>6] <n View <3 View <<3 WebView[text=\"立即用水\"] <<2 [vid=\"web_parent_layout_id\"]",
          "snapshotUrls": "https://i.gkd.li/i/23327551"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "matches": "[vid=\"anythink_myoffer_btn_close_id\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/3ddc6da8-7bbf-43f8-8d79-1fabe1180fea",
          "snapshotUrls": "https://i.gkd.li/i/23475779"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "更新提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.yunma.baseextend.appupdate.view.UpdateDialogActivity",
          "matches": [
            "[text^=\"发现新版本\"]",
            "[vid=\"ib_close\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24336659"
        }
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.yunma.app.ui.main.MainActivity",
          "matches": [
            "[text*=\"将系统通知权限开启\"]",
            "[text=\"拒绝\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/25608212"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "功能类-打开应用后自动点击右上角扫一扫",
      "desc": "仅开屏后触发一次",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.yunma.app.ui.main.MainActivity",
          "matches": "[vid=\"fl_scan\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22451914"
        }
      ],
      "enable": false
    }
  ]
} as any);
