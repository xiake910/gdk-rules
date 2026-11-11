// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.apps.googlevoice",
  "name": "Voice",
  "groups": [
    {
      "key": 10,
      "name": "功能类-跳过实体号码链接",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.google.android.apps.voice.promo.PromoActivity",
        "com.google.android.apps.voice.verification.procedure.VerificationActivity"
      ],
      "rules": [
        {
          "matches": [
            "[vid=\"title_view\"][text=\"Link this device to Google Voice\" || text=\"将此设备与 Google Voice 关联\" || text=\"將這個裝置連結到 Google Voice\"]",
            "[vid=\"skip_button\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13314255",
            "https://i.gkd.li/i/13437190",
            "https://i.gkd.li/i/23205177"
          ]
        }
      ]
    },
    {
      "key": 3000,
      "enable": false,
      "name": "全屏广告-跳过实体号码链接",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.google.android.apps.voice.promo.PromoActivity",
        "com.google.android.apps.voice.verification.procedure.VerificationActivity"
      ],
      "rules": [
        {
          "matches": [
            "[id=\"com.google.android.apps.googlevoice:id/title_view\"][text=\"Link this device to Google Voice\" || text=\"将此设备与 Google Voice 关联\"]",
            "[id=\"com.google.android.apps.googlevoice:id/skip_button\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13314255",
            "https://i.gkd.li/import/13437190"
          ]
        }
      ]
    }
  ]
} as any);
