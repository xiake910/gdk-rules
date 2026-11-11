// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sainti.eduread",
  "name": "出口成章",
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
          "activityIds": ".home.FrActivity",
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/38334f57-2796-48a7-9000-76de3e8221ed",
          "snapshotUrls": "https://i.gkd.li/i/18392760"
        }
      ],
      "enable": false
    }
  ]
} as any);
