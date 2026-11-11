// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jisu.manhua",
  "name": "漫画人极速版",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ilike.cartoon.activities.HomeActivity",
          "matches": "[vid=\"iv_promotion\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688186"
        }
      ],
      "enable": false
    }
  ]
} as any);
