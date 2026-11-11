// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.eastmoney.android.fund",
  "name": "天天基金",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-自选页面广告",
      "rules": [
        {
          "activityIds": ".centralis.activity.FundRootActivity",
          "matches": "FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12642387"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "其他-自选页面缩写提示信息",
      "rules": [
        {
          "activityIds": ".centralis.activity.FundRootActivity",
          "matches": "[desc=\"表示场内基金的最新价和折价率\"] -(2) FrameLayout < FrameLayout + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12642387"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".centralis.activity.FundRootActivity",
          "matches": "@FrameLayout[clickable=true] - * >2 [desc=\"立即升级\"] <<n [vid=\"container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13546927"
        }
      ],
      "enable": false
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".centralis.activity.FundRootActivity",
            ".activity.FundSplashActivity"
          ],
          "matches": "ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d",
          "snapshotUrls": [
            "https://i.gkd.li/i/14149452",
            "https://i.gkd.li/i/14332091"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 5,
      "name": "评价提示-好评弹窗",
      "desc": "点击下次再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".centralis.activity.FundRootActivity",
          "matches": "@[desc=\"下次再说\"] <<n [vid=\"container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d791a2f9-ae86-4389-8ee7-36a87f11b60d",
          "snapshotUrls": "https://i.gkd.li/i/14179508"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-自选页面广告",
      "activityIds": "com.eastmoney.android.fund.centralis.activity.FundRootActivity",
      "rules": [
        "FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView"
      ],
      "snapshotUrls": "https://i.gkd.li/import/12642387",
      "enable": false
    },
    {
      "enable": false,
      "key": 3001,
      "name": "全屏广告-自选页面缩写提示信息",
      "activityIds": "com.eastmoney.android.fund.centralis.activity.FundRootActivity",
      "rules": [
        "[desc=\"表示场内基金的最新价和折价率\"] -(2) FrameLayout < FrameLayout + ImageView"
      ],
      "snapshotUrls": "https://i.gkd.li/import/12642387"
    }
  ]
} as any);
