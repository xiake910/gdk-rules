// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.mtt",
  "name": "QQ浏览器",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472630"
        },
        {
          "key": 1,
          "matches": "@View[clickable=true][childCount=0] +2 * >3 [text^=\"向上滑动\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14819586",
            "https://i.gkd.li/i/23743205"
          ]
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 1,
      "name": "分段广告-文件界面-卡片广告",
      "desc": "①点击[广告] ②点击[不感兴趣]",
      "fastQuery": true,
      "actionCd": 5000,
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 1,
          "name": "①点击[广告]",
          "matches": "ImageView[visibleToUser=true] < @[clickable=true] < [childCount=1] <3 [childCount=5] >6 [vid=\"video_wonder_video_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31367445",
            "https://i.gkd.li/i/31367447"
          ],
          "exampleUrls": "https://e.gkd.li/a8d89cb8-fa33-4400-a4e1-e8cceb148ac5"
        },
        {
          "key": 2,
          "preKeys": [
            1
          ],
          "name": "②点击[不感兴趣]",
          "matches": "[desc=\"不感兴趣\"] < @[clickable=true] <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/31371556"
        }
      ],
      "enable": false
    },
    {
      "key": 10,
      "name": "分段广告-小说阅读页面-卡片广告",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "actionCd": 3000,
          "key": 0,
          "name": "点击广告按钮",
          "excludeMatches": "[desc=\"屏蔽此广告\"||desc=\"不感兴趣\"]",
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > [desc=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907446",
            "https://i.gkd.li/i/12907445"
          ]
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[屏蔽此广告]/[直接关闭]",
          "forcedTime": 10000,
          "matches": "@ViewGroup[childCount=1 || childCount=3] > [desc=\"屏蔽此广告\" || desc=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907654",
            "https://i.gkd.li/i/12907651",
            "https://i.gkd.li/i/12907655",
            "https://i.gkd.li/i/12907653"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 11,
      "name": "分段广告-小说阅读页面-视频广告",
      "activityIds": "com.qq.e.tg.RewardvideoPortraitADActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[text=\"腾讯广告\"] >n [id^=\"button_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12909822"
        },
        {
          "preKeys": [
            0
          ],
          "key": 1,
          "matches": "[vid=\"reward_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908955"
        }
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3000,
      "name": "局部广告-小说阅读页面-卡片广告",
      "activityIds": "com.tencent.mtt.MainActivity",
      "rules": [
        {
          "actionCd": 3000,
          "key": 0,
          "name": "点击广告按钮",
          "excludeMatches": "[desc=\"屏蔽此广告\"||desc=\"不感兴趣\"]",
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > [desc=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907446",
            "https://i.gkd.li/import/12907445"
          ]
        },
        {
          "preKeys": 0,
          "key": 1,
          "name": "点击[屏蔽此广告]",
          "matches": "@ViewGroup > [desc=\"屏蔽此广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907654",
            "https://i.gkd.li/import/12907651"
          ]
        },
        {
          "preKeys": 1,
          "key": 2,
          "name": "点击[不感兴趣]",
          "matches": "@ViewGroup > [desc=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907655",
            "https://i.gkd.li/import/12907653"
          ]
        }
      ]
    },
    {
      "key": 3001,
      "name": "全屏广告-小说阅读页面-视频广告",
      "activityIds": "com.qq.e.tg.RewardvideoPortraitADActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[text=\"腾讯广告\"] >n [id^=\"button_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12909822"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "[id=\"com.tencent.mtt:id/reward_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12908955"
        }
      ],
      "enable": false
    }
  ]
} as any);
