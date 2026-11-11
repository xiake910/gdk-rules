// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yujian.ResideMenuDemo",
  "name": "雨见",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.yujian.MainActivity",
          "matches": "TextView[vid=\"btn_selectOther\"]",
          "snapshotUrls": "https://i.gkd.li/i/13224234"
        }
      ]
    }
  ]
} as any);
