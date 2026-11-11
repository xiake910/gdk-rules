// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wzwh.bzpaipan",
  "name": "问真八字排盘",
  "groups": [
    {
      "key": 3,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "matches": "@ImageView[clickable=true] < LinearLayout[childCount=1] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/13162912"
        }
      ]
    }
  ]
} as any);
