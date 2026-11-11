// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
