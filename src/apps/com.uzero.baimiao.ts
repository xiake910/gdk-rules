// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.uzero.baimiao",
  "name": "白描",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动点击截取全屏",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.screen.ScreenCaptureActivity",
          "matches": "[text=\"截取全屏\"]",
          "snapshotUrls": "https://i.gkd.li/i/23054772"
        }
      ]
    }
  ]
} as any);
