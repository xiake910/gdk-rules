// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huawei.android.totemweather",
  "name": "华为天气",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[id=\"com.huawei.hms.ads.uiengine:id/hiad_skip_text\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12928975",
            "https://i.gkd.li/i/13226636"
          ]
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 2,
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": [
            ".WeatherMainActivity",
            ".WeatherHome"
          ],
          "matches": "[vid=\"rl_close_pps\" || vid=\"ad_cancel\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521221",
            "https://i.gkd.li/i/13787501",
            "https://i.gkd.li/i/13800100",
            "https://i.gkd.li/i/14278462",
            "https://i.gkd.li/i/15831584"
          ]
        },
        {
          "key": 1,
          "activityIds": ".composite.MarketCompositeActivity",
          "matches": "[vid=\"promote_ad_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13218197"
        },
        {
          "key": 2,
          "fastQuery": true,
          "activityIds": ".news.main.content.ModulesActivity",
          "matches": "@[clickable=true][text=\"负反馈\"] <<n [vid=\"content_main_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/24688832"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "key": 99,
          "activityIds": [
            "com.huawei.openalliance.ad.activity.FeedbackActivity",
            ".news.main.content.ModulesActivity"
          ],
          "anyMatches": [
            "[text=\"直接关闭\"]",
            "@[clickable=true][text=\"直接关闭\"] <<n [vid=\"content_main_view\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13259434",
            "https://i.gkd.li/i/15831539",
            "https://i.gkd.li/i/24688856"
          ]
        }
      ],
      "enable": true
    },
    {
      "enable": true,
      "key": 1,
      "name": "局部广告-卡片式广告",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": "com.huawei.android.totemweather.composite.MarketCompositeActivity",
          "matches": "[id=\"com.huawei.android.totemweather:id/promote_ad_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13218197"
        },
        {
          "preKeys": 0,
          "key": 1,
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "matches": "[id=\"com.huawei.android.totemweather:id/feedback_negative_flv\"] > [text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/import/13259434"
        },
        {
          "key": 2,
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/13521221"
        },
        {
          "key": 3,
          "activityIds": "com.huawei.android.totemweather.WeatherHome",
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13787501"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-顶部广告条",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "matches": "[vid=\"rl_close_pps\"] > ImageView",
          "snapshotUrls": "https://i.gkd.li/import/13800100"
        }
      ],
      "enable": true
    }
  ]
} as any);
