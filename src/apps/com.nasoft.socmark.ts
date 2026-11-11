// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.nasoft.socmark",
  "name": "手机性能排行",
  "groups": [
    {
      "key": 1,
      "name": "局部广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.SearchScoreActivity",
          "matches": "[vid=\"btn_banner_ad_clear\"]",
          "snapshotUrls": "https://i.gkd.li/i/28173008"
        }
      ]
    }
  ]
} as any);
