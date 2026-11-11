// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
      ],
      "enable": false
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
