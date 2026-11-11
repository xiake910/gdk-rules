// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.remoteassistant",
  "name": "远程协助",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动同意远程协助请求",
      "desc": "发来远程协助请求，点击同意",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".InviteeActivity",
          "matches": [
            "[text=\"发来远程协助请求\"][visibleToUser=true]",
            "Button[vid=\"inviteeAgree\"][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/20768251"
        }
      ]
    }
  ]
} as any);
