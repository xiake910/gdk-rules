// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.qqmusiccar",
  "name": "QQ音乐车机版",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".app.activity.AppStarterActivity",
          "matches": [
            "[text$=\"版本升级\"]",
            "[vid=\"dialog_button_close\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23792987"
        }
      ]
    }
  ]
} as any);
