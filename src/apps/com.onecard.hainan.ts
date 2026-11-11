// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.onecard.hainan",
  "name": "海南一卡通",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "activityIds": [
        "com.hainan.renshe.app.ui.SplashActivity",
        "com.miui.home.launcher.Launcher"
      ],
      "rules": [
        {
          "matches": "@[text=\"暂不更新\"] +(2) [text=\"立即更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12662114",
            "https://i.gkd.li/import/12662136"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
