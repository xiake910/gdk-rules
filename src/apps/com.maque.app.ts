// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.maque.app",
  "name": "麻雀省钱",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页活动弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]",
          "snapshotUrls": "https://i.gkd.li/i/12640100"
        }
      ]
    }
  ]
} as any);
