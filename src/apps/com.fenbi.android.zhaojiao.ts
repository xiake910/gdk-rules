// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fenbi.android.zhaojiao",
  "name": "粉笔教师",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.fenbi.android.module.home.HomeActivity",
          "matches": "[text=\"广告\"] + [vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/31909044",
          "exampleUrls": "https://e.gkd.li/0071fce0-92a4-45a3-84fe-973351facf6e"
        }
      ]
    }
  ]
} as any);
