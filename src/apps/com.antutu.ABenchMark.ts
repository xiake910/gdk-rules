// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.antutu.ABenchMark",
  "name": "安兔兔评测",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.android.module.app.ui.test.activity.ActivityTestResult",
          "matches": "[text=\"广告\"] +2 View > @TextView[childCount=0][index=1][clickable=true][visibleToUser=true] <<n [vid=\"ksad_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13234012"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-广告卡片",
      "activityIds": "com.android.module.app.ui.test.activity.ActivityTestResult",
      "rules": "[text=\"广告\"] + TextView + View > TextView",
      "snapshotUrls": "https://i.gkd.li/import/13234012",
      "enable": false
    }
  ]
} as any);
