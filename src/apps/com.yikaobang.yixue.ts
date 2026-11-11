// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yikaobang.yixue",
  "name": "医考帮",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "matches": "ImageView[vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13425853",
            "https://i.gkd.li/i/28434183"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告",
      "desc": "顶部轮播图广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "matches": "[vid=\"iv_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/28434131"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "局部广告-悬浮窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 3000,
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "matches": "[vid=\"iv_delete\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/28434131",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28434273"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-会员活动弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "matches": "@ImageView[id=\"com.yikaobang.yixue:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425853"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-应用内会员活动弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
      "rules": [
        {
          "matches": "@ImageView[id=\"com.yikaobang.yixue:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425853"
        }
      ],
      "enable": false
    }
  ]
} as any);
