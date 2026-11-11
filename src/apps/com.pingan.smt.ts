// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pingan.smt",
  "name": "i深圳",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity",
          "matches": "[vid=\"close_view\"]",
          "exampleUrls": "https://e.gkd.li/97a058cf-0564-4194-b527-b2ec40233204",
          "snapshotUrls": "https://i.gkd.li/i/17011387"
        }
      ],
      "enable": true
    }
  ]
} as any);
