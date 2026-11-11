// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sankuai.movie",
  "name": "猫眼",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-开启通知弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - * > [text=\"开启通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/18455375"
        }
      ]
    }
  ]
} as any);
