// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver",
  "name": "TwiTake",
  "groups": [
    {
      "key": 3,
      "name": "评价提示-评分弹窗",
      "desc": "点击 LATER ",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "",
          "matches": [
            "[text=\"Love it\"][visibleToUser=true]",
            "[text=\"LATER\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13748858"
        }
      ]
    }
  ]
} as any);
