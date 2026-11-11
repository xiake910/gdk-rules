// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
