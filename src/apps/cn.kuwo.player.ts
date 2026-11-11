// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.kuwo.player",
  "name": "酷我音乐",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-酷我会员日弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.MainActivity",
          "matches": "[vid=\"iv_business_personal_dia_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13974483"
        }
      ]
    }
  ]
} as any);
