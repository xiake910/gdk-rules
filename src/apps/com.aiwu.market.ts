// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.aiwu.market",
  "name": "爱吾游戏宝盒",
  "groups": [
    {
      "key": 1,
      "name": "青少年模式",
      "desc": "点击[我知道了]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.activity.NewHomeActivity",
          "matches": "[vid=\"hintTextView2\"] + [vid=\"confirmView\"]",
          "snapshotUrls": "https://i.gkd.li/i/14032203"
        }
      ],
      "enable": false
    }
  ]
} as any);
