// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
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
