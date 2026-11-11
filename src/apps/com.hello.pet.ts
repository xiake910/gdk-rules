// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hello.pet",
  "name": "街猫",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] +2 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14622639"
        }
      ],
      "enable": false
    }
  ]
} as any);
