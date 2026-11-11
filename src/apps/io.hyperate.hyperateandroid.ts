// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "io.hyperate.hyperateandroid",
  "name": "HypeRate",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@Image[childCount=0][text.length>0] < View[childCount=1] - View[childCount=1] > [text=\"Customize Now\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/a9ee995f-1a7e-4663-86aa-b56a71e2ed5a",
          "snapshotUrls": "https://i.gkd.li/i/23598900"
        }
      ]
    }
  ]
} as any);
