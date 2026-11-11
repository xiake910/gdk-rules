// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
