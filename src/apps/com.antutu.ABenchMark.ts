// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
      ]
    }
  ]
} as any);
