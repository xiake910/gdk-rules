// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.banjixiaoguanjia.app",
  "name": "班级小管家",
  "groups": [
    {
      "key": 1,
      "name": "分段广告-卡片广告",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12904612"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12906196"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-应用内广告卡片",
      "activityIds": "com.banjixiaoguanjia.app.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12904612"
        },
        {
          "preKeys": 0,
          "key": 1,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/12906196"
        }
      ],
      "enable": false
    }
  ]
} as any);
