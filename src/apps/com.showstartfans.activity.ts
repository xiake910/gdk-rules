// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.showstartfans.activity",
  "name": "秀动",
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
          "activityIds": ".activitys.maintab.newmain.MainNewActivity",
          "matches": "[vid=\"img_close_coupon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670432"
        }
      ],
      "enable": false
    }
  ]
} as any);
