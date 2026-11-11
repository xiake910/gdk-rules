// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-评分弹窗",
      "desc": "自动点击 LATER 。",
      "rules": [
        {
          "activityIds": "downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver.MainActivity",
          "matches": "[id=\"downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13748858"
        }
      ],
      "enable": true
    }
  ]
} as any);
