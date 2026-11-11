// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cc.forestapp",
  "name": "Forest",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "结束一次种植后概率弹出",
      "rules": [
        {
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "Button[clickable=true][desc=\"Skip\" || desc=\"Close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/33598870",
            "https://i.gkd.li/i/33598865"
          ],
          "exampleUrls": "https://e.gkd.li/fa5e8255-df84-4f36-b54f-c31a4331abdb"
        }
      ]
    }
  ]
} as any);
