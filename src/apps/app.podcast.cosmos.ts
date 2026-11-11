// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "app.podcast.cosmos",
  "name": "小宇宙",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-内容推荐",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "io.iftech.android.podcast.app.home.index.view.HomeActivity",
          "matches": "[vid=\"clSubscribeBsd\"] > [vid=\"ivCancel\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/25470023"
        }
      ]
    }
  ]
} as any);
