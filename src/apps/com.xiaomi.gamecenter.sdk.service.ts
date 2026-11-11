// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
