// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.example.servyouappzhuhai",
  "name": "广东税务",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.com.servyou.servyouzhuhai.activity.main.imps.MainActivity",
          "matches": "[vid=\"btn_dialog_negtive\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440721"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-通知权限授权弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "rules": [
        {
          "matches": "[id=\"com.example.servyouappzhuhai:id/btn_dialog_negtive\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440721"
        }
      ]
    }
  ]
} as any);
