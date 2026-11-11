// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sf.activity",
  "name": "顺丰速运",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "@[text=\"取消\"] < ViewGroup - ScrollView >(2) [text*=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642445"
        },
        {
          "key": 1,
          "fastQuery": true,
          "matches": "@Button[desc=\"取消\"] - ViewGroup >3 [visibleToUser=true][text=\"立即升级\"] <<n [vid=\"rnRootLayout\"]",
          "snapshotUrls": "https://i.gkd.li/i/13291144"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "其他-专属月报弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[id=\"MonthReportDialogCloseBtn\"] > ImageView",
          "exampleUrls": "https://m.gkd.li/57941037/83023ed5-f143-4355-9fff-e078011dfa4a",
          "snapshotUrls": "https://i.gkd.li/i/12642441"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".MainActivity",
          "matches": "@Button[id=\"BmsAdDialogViewCloseButton\"] <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid=\"rnRootLayout\"]",
          "exampleUrls": "https://e.gkd.li/3be50f7b-5696-47c9-95cc-ef46f8531967",
          "snapshotUrls": [
            "https://i.gkd.li/i/14502128",
            "https://i.gkd.li/i/17869485"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-专属月报弹窗",
      "activityIds": "com.sf.activity.MainActivity",
      "rules": [
        "[id=\"MonthReportDialogCloseBtn\"] > ImageView"
      ],
      "snapshotUrls": "https://i.gkd.li/import/12642441",
      "enable": false
    }
  ]
} as any);
