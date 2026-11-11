// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jdcloud.mt.smartrouter",
  "name": "京东云无线宝",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/26521f31-ee9b-4bab-8275-fab75a76c96e",
          "snapshotUrls": "https://i.gkd.li/i/14432168"
        }
      ],
      "enable": false
    }
  ]
} as any);
