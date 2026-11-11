// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.wallet",
  "name": "钱包",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".bookkeep.activity.BookKeepMainActivity",
          "matches": "@[clickable=true] > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440881"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-通知权限授权弹窗",
      "activityIds": "com.vivo.wallet.bookkeep.activity.BookKeepMainActivity",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "rules": [
        {
          "matches": "@Button[text*=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440881"
        }
      ]
    }
  ]
} as any);
