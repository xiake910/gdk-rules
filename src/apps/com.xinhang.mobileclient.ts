// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xinhang.mobileclient",
  "name": "中国移动河南",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "activityIds": ".home.activity.HomeActivity",
      "rules": [
        {
          "key": 0,
          "matches": "View[desc^=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13024867"
        },
        {
          "key": 1,
          "matches": "View > View > TextView + TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/13024869"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-右侧悬浮广告",
      "rules": [
        {
          "activityIds": ".home.activity.HomeActivity",
          "matches": "@[vid=\"iv_close\"] + [vid=\"iv_advert\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13024863",
            "https://i.gkd.li/i/13024872"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-应用内广告弹窗",
      "activityIds": "com.xinhang.mobileclient.home.activity.HomeActivity",
      "rules": [
        {
          "key": 0,
          "matches": "View[desc^=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13024867"
        },
        {
          "key": 1,
          "matches": "View > View > TextView + TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/import/13024869"
        }
      ],
      "enable": false
    }
  ]
} as any);
