// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.newapp",
  "name": "文心一言",
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
          "activityIds": ".update.UpdateAlertActivity",
          "matches": "[text=\"立即更新\"] + [text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360280"
        }
      ],
      "enable": false
    }
  ]
} as any);
