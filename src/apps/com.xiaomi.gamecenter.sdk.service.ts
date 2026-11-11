// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.gamecenter.sdk.service",
  "name": "小米游戏服务",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xiaomi.gamecenter.sdk.ui.actlayout.ViewUpgrade",
          "matches": "[text=\"升级提示\"] < * + [vid=\"btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14188929"
        }
      ]
    }
  ]
} as any);
