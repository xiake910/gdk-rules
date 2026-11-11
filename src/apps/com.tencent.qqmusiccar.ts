// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
