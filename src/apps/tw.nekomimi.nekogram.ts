// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tw.nekomimi.nekogram",
  "name": "Nekogram",
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
          "activityIds": "org.telegram.ui.LaunchActivity",
          "matches": "@Button[desc$=\"稍后提醒我\"] - [desc=\"立即下载\"] <3 FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14229236",
            "https://i.gkd.li/i/14372061"
          ]
        }
      ]
    }
  ]
} as any);
