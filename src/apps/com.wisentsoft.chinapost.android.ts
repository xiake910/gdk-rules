// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wisentsoft.chinapost.android",
  "name": "中国邮政",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 LinearLayout <3 ViewGroup < [vid=\"ll_main\"]",
          "snapshotUrls": "https://i.gkd.li/i/15914347"
        }
      ]
    }
  ]
} as any);
