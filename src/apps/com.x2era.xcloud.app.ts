// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.x2era.xcloud.app",
  "name": "Fa米家",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "desc": "关闭升级弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": [
            "[vid=\"tv_upgrade\"]",
            "[vid=\"iv_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13420706"
        }
      ]
    }
  ]
} as any);
