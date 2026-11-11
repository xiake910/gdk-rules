// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.baike",
  "name": "百度百科",
  "groups": [
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "desc": "自动点击\"不允许\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".component.push.NotificationEnableDialog",
          "matches": "[text^=\"打开推送通知\"] +2 [text=\"不允许\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755717"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "权限提示-请求通知权限弹窗",
      "desc": "自动点击【不允许】",
      "activityIds": ".component.push.NotificationEnableDialog",
      "fastQuery": true,
      "resetMatch": "app",
      "rules": "@TextView[text=\"不允许\"] -n TextView[text*=\"发送通知\"]",
      "snapshotUrls": "https://i.gkd.li/import/12755717",
      "enable": false
    }
  ]
} as any);
