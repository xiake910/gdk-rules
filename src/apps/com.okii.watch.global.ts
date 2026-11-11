// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.okii.watch.global",
  "name": "小天才",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630943"
        }
      ]
    },
    {
      "key": 2,
      "name": "其他-手表安全守护弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xtc.widget.phone.popup.activity.CustomActivity13",
          "matches": "[vid=\"photo_sensitive_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/8a5030a1-2b24-4a8a-a944-29d0eaabf936",
          "snapshotUrls": "https://i.gkd.li/i/13630944"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-手表安全守护弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": "[id=\"com.okii.watch.global:id/photo_sensitive_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13630944",
      "enable": false
    }
  ]
} as any);
