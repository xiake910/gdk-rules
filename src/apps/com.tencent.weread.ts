// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.weread",
  "name": "微信读书",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "matchTime": 30000,
          "activityIds": [
            ".module.bottomSheet.BottomSheetForFragment",
            ".WeReadFragmentActivity"
          ],
          "matches": "[vid=\"open_notification_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642247",
            "https://i.gkd.li/i/13233735"
          ]
        },
        {
          "key": 1,
          "activityIds": ".WeReadFragmentActivity",
          "matches": "[text=\"开启推送通知\"] +3 [clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14190089"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-系统推送弹窗",
      "desc": "系统推送弹窗-点击取消",
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 30000,
      "resetMatch": "app",
      "activityIds": [
        "com.tencent.weread.module.bottomSheet.BottomSheetForFragment",
        "com.tencent.weread.WeReadFragmentActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.tencent.weread:id/open_notification_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642247",
            "https://i.gkd.li/import/13233735"
          ]
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "青少年模式",
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 30000,
      "resetMatch": "app",
      "activityIds": "com.tencent.weread.WeReadFragmentActivity",
      "rules": "[text=\"设置青少年模式\"] - LinearLayout >2 [text=\"我知道了\"]",
      "snapshotUrls": "https://i.gkd.li/import/13233668",
      "enable": false
    }
  ]
} as any);
