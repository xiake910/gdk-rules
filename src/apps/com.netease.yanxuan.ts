// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.yanxuan",
  "name": "网易严选",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".module.mainpage.activity.MainPageActivity",
          "matches": "[vid=\"trans_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840641"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-弹窗广告",
      "activityIds": "com.netease.yanxuan.module.mainpage.activity.MainPageActivity",
      "rules": "[id=\"com.netease.yanxuan:id/trans_cancel\"]",
      "snapshotUrls": "https://i.gkd.li/import/12840641",
      "enable": false
    }
  ]
} as any);
