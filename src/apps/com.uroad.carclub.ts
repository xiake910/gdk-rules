// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.uroad.carclub",
  "name": "ETC车宝",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": ".main.activity.MainActivity",
          "matches": "View[childCount=4] > @TextView[index=2][clickable=true] <<n [vid=\"ad_container_fl\"]",
          "snapshotUrls": "https://i.gkd.li/i/13800067"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-卡片式广告",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.uroad.carclub.main.activity.MainActivity",
          "matches": "[id=\"com.uroad.carclub:id/ad_container_fl\"] >n View[childCount=4] > TextView[index=2][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13800067"
        }
      ],
      "enable": false
    }
  ]
} as any);
