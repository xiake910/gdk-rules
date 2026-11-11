// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "icu.freedomIntrovert.biliSendCommAntifraud",
  "name": "哔哩发评反诈",
  "groups": [
    {
      "key": 1,
      "name": "功能类-检查评论自动点击后台等待",
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 400,
          "activityIds": ".ByXposedLaunchedActivity",
          "matches": "Button[text=\"后台等待\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25240613",
            "https://i.gkd.li/i/25320069"
          ]
        }
      ]
    }
  ]
} as any);
