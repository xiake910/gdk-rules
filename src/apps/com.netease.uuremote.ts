// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.uuremote",
  "name": "UU远程",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.remote.app.ui.activity.MainActivity",
          "matches": [
            "[text=\"开启消息通知\"]",
            "[text=\"以后再说\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23787454"
        }
      ]
    }
  ]
} as any);
