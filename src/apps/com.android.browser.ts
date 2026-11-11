// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.browser",
  "name": "小米浏览器",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-关闭[个性推荐开启提示]",
      "activityIds": [
        ".BrowserActivity"
      ],
      "rules": [
        {
          "matches": "@ImageView[id!=null][clickable=true] -2 [text=\"个性推荐获得更丰富内容\"]",
          "snapshotUrls": "https://i.gkd.li/i/12829403"
        }
      ],
      "enable": false
    },
    {
      "key": 1,
      "name": "分段广告-主页信息流广告",
      "fastQuery": true,
      "activityIds": [
        ".BrowserActivity",
        ".flow.view.FeedbackDialog"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "@[id!=null][desc=\"负反馈\"][visibleToUser=true] -n * > * > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12894221",
            "https://i.gkd.li/i/12893649"
          ]
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "@FrameLayout > ViewGroup > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12894234",
            "https://i.gkd.li/i/13196059"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-搜索结果页底部必应推荐卡片",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": ".BrowserActivity",
          "matches": "[id=\"bnp_close_icon\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/b0d601cf-6cd1-411c-8555-bd4a8ee3335c",
          "snapshotUrls": [
            "https://i.gkd.li/i/14256707",
            "https://i.gkd.li/i/14256761"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "分段广告-小说阅读页面广告",
      "fastQuery": true,
      "activityIds": "com.duokan.shop.mibrowser.reading.SdkReaderActivity",
      "rules": [
        {
          "key": 0,
          "excludeMatches": "[vid=\"reading__close_ad_view__subtitle_tv\"][visibleToUser=true]",
          "matches": "[vid=\"reading__app_ad_view__close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/5deac756-01a5-4ee0-a26f-9fb659115f78",
          "snapshotUrls": "https://i.gkd.li/i/19718114",
          "excludeSnapshotUrls": "https://i.gkd.li/i/19718162"
        },
        {
          "preKeys": [
            0
          ],
          "matches": "[vid=\"reading__close_ad_view__subtitle_tv\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6e2c9635-4084-47e1-b255-4bc9728a7528",
          "snapshotUrls": "https://i.gkd.li/i/19718162"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-关闭[个性推荐开启提示]",
      "activityIds": [
        "com.android.browser.BrowserActivity"
      ],
      "rules": [
        {
          "matches": "@ImageView[id!=null][clickable=true] -2 [text=\"个性推荐获得更丰富内容\"]",
          "snapshotUrls": "https://i.gkd.li/import/12829403"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "局部广告-主页信息流广告",
      "fastQuery": true,
      "activityIds": [
        "com.android.browser.BrowserActivity",
        "com.android.browser.flow.view.FeedbackDialog"
      ],
      "rules": [
        {
          "key": 0,
          "matches": "@[id!=null][desc=\"负反馈\"][visibleToUser=true] -n * > * > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12894221",
            "https://i.gkd.li/import/12893649"
          ]
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "@FrameLayout > ViewGroup > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12894234",
            "https://i.gkd.li/import/13196059"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
