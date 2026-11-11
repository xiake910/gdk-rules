// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qcymall.earphonesetup",
  "name": "QCY",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-我的-卡片广告",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".v2ui.activity.V2MainActivity",
          "matches": "[vid=\"close_img_banner\"]",
          "snapshotUrls": "https://i.gkd.li/i/13874219"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-我的-广告卡片",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "activity",
      "activityIds": "com.qcymall.earphonesetup.v2ui.activity.V2MainActivity",
      "actionMaximum": 1,
      "rules": "[vid=\"close_img_banner\"]",
      "snapshotUrls": "https://i.gkd.li/import/13874219",
      "enable": false
    }
  ]
} as any);
