// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.doudoubird.weather",
  "name": "最准天气",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"ad_view\"] + [vid=\"delete_icon\"]",
          "exampleUrls": "https://e.gkd.li/2a61d3de-6117-4d85-8f4d-565f6ee00a57",
          "snapshotUrls": "https://i.gkd.li/i/17358146"
        }
      ],
      "enable": true
    }
  ]
} as any);
