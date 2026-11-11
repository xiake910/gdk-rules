// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.modian.app",
  "name": "摩点",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-[我的]界面广告条",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[vid=\"fl_banner_layout\"] > [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13610188"
        }
      ]
    }
  ]
} as any);
