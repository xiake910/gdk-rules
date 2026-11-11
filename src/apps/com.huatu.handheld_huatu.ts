// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huatu.handheld_huatu",
  "name": "华图在线",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".view.MainPopDialog",
            ".business.main.MainTabActivity"
          ],
          "matches": "[vid=\"main_img_adv_bg\"] + [vid=\"main_img_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12715702",
            "https://i.gkd.li/i/12744973"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".business.main.MainTabActivity",
          "matches": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715719"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": [
        "com.huatu.handheld_huatu.view.MainPopDialog",
        "com.huatu.handheld_huatu.business.main.MainTabActivity"
      ],
      "rules": "[id=\"com.huatu.handheld_huatu:id/main_img_adv_bg\"] + [id=\"com.huatu.handheld_huatu:id/main_img_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12715702",
        "https://i.gkd.li/import/12744973"
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3001,
      "name": "全屏广告-请求通知权限弹窗",
      "activityIds": "com.huatu.handheld_huatu.business.main.MainTabActivity",
      "rules": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
      "snapshotUrls": "https://i.gkd.li/import/12715719"
    }
  ]
} as any);
