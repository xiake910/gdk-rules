// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.citywithincity.ecard",
  "name": "e通卡",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": ".EntryActivity",
          "matches": "@ImageView[visibleToUser=true][width<119 && height<119] < [childCount=1] <2 ViewGroup < ViewGroup <2 [childCount=2] < ViewGroup < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/28448307"
        }
      ]
    }
  ]
} as any);
