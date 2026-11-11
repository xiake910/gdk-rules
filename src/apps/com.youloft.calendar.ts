// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youloft.calendar",
  "name": "万年历",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-悬浮广告",
      "rules": [
        {
          "key": 0,
          "name": "万年历页面-右侧悬浮广告",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"ad_iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13348416"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-悬浮广告",
      "rules": [
        {
          "key": 0,
          "name": "万年历页面-右侧悬浮广告",
          "activityIds": "com.youloft.calendar.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.youloft.calendar:id/ad_iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13348416"
        }
      ],
      "enable": false
    }
  ]
} as any);
