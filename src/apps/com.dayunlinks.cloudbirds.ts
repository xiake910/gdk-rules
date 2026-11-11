// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dayunlinks.cloudbirds",
  "name": "千鸟物联",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.qianniao.main.TabActivity",
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/34136039",
          "exampleUrls": "https://e.gkd.li/2e8463c1-c6d6-4fd9-84c2-98d502e95a19"
        }
      ]
    }
  ]
} as any);
