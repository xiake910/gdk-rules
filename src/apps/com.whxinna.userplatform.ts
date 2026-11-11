// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.whxinna.userplatform",
  "name": "住理生活",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "key": 0,
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26462136"
        },
        {
          "key": 1,
          "matches": "@[name$=\"View\"][clickable=true][width<500 && height<300] <3 FrameLayout[childCount=4] <<(2,3,4) [vid=\"adsFl\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26332230",
            "https://i.gkd.li/i/26462322",
            "https://i.gkd.li/i/31610751"
          ]
        }
      ],
      "order": -10
    },
    {
      "key": 1,
      "name": "通知提示-公告",
      "rules": [
        {
          "activityIds": "com.whxinna.webview.WebViewActivity",
          "matches": "@Button[clickable=true][width<150 && height<150] - * >3 [text=\"温馨提示\"]",
          "snapshotUrls": "https://i.gkd.li/i/26308642"
        }
      ]
    }
  ]
} as any);
