// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.byd.aeri.caranywhere",
  "name": "比亚迪王朝",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[vid=\"tv_determine\"][text=\"立即安装\"]",
            "[vid=\"tv_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13348383"
        }
      ]
    }
  ]
} as any);
