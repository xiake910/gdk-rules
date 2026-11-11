// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tipsoon.android",
  "name": "简讯",
  "groups": [
    {
      "key": -1,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/7ba2a5cd-12e8-4ac3-a867-8d0f81247d93",
          "snapshotUrls": "https://i.gkd.li/i/14568317"
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"cardview\"] + [vid=\"img_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13426997"
        }
      ],
      "enable": true
    }
  ]
} as any);
