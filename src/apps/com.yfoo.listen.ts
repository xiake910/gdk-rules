// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yfoo.listen",
  "name": "聆听音乐",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": "x.activity.HomeActivity",
          "matches": "@[text=\"取消\"] < * > [text=\"下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/15856014"
        }
      ],
      "enable": true
    }
  ]
} as any);
