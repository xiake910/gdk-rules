// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
    }
  ]
} as any);
