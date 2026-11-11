// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
