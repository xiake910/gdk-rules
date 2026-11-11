// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmi.jegotrip",
  "name": "无忧行",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.BottomTabsActivity",
          "matches": "[vid=\"ig_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13631904"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.BottomTabsActivity",
          "matches": [
            "[text=\"申请定位权限说明\"]",
            "[vid=\"btn_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13232766"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "权限提示-权限申请弹窗",
      "desc": "点击[取消]",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "pub.devrel.easypermissions.AppSettingsDialogHolderActivity",
          "matches": [
            "[text=\"权限申请\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/16233246"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-应用内广告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "matches": "[id=\"com.cmi.jegotrip:id/ig_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13631904"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "权限提示-请求定位权限弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.cmi.jegotrip.ui.BottomTabsActivity",
      "rules": "[text=\"申请定位权限说明\"] < LinearLayout +2 LinearLayout [id=\"com.cmi.jegotrip:id/btn_cancel\"]",
      "snapshotUrls": "https://i.gkd.li/import/13232766",
      "enable": false
    }
  ]
} as any);
