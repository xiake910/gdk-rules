// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
