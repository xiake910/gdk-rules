// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.android.pushagent",
  "name": "荣耀推送服务",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动[禁止]发送通知",
      "desc": "弹窗:是否允许xxx发送通知? 点击[禁止]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.NotificationDialogForOverMagic6Activity",
          "matches": [
            "[text$=\"发送通知？\"]",
            "[text=\"禁止\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/26328029"
        }
      ]
    }
  ]
} as any);
