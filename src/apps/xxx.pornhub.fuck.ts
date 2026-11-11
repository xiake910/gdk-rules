// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "xxx.pornhub.fuck",
  "name": "JavDB",
  "groups": [
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "desc": "点击[知道了]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@Button[desc=\"知道了\"][visibleToUser=true] <3 View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/ae1792dd-210b-4ac2-bfce-c2081ed03498",
          "snapshotUrls": "https://i.gkd.li/i/14559882"
        }
      ]
    },
    {
      "enable": false,
      "key": 3000,
      "name": "局部广告-公告弹窗",
      "activityIds": "app.lawnchair.LawnchairLauncher",
      "rules": "[desc=\"公告\"] + * + [desc=\"知道了\"]",
      "snapshotUrls": "https://i.gkd.li/import/13334608"
    }
  ]
} as any);
