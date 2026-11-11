// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ky.medical.reference",
  "name": "用药参考",
  "groups": [
    {
      "key": -1,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": "[vid=\"btn_go\"][text^=\"关闭\"]",
      "snapshotUrls": "https://i.gkd.li/i/12918049",
      "order": -10,
      "enable": true
    },
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".promotion.AdDialogActivity",
          "matches": "[vid=\"icClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840924"
        }
      ],
      "enable": true
    }
  ]
} as any);
