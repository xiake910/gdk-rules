// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.peopledailychina.activity",
  "name": "人民日报",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"advert_iv_del\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/53c28fe8-9db9-45d8-82b3-7034aa10d2ed",
          "snapshotUrls": "https://i.gkd.li/i/15175151"
        }
      ]
    }
  ]
} as any);
