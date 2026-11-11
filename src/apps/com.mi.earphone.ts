// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mi.earphone",
  "name": "小米耳机",
  "groups": [
    {
      "key": 1,
      "name": "评价提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "@[vid=\"close_iv\"] + [text=\"喜欢“小米耳机”吗？\"]",
          "snapshotUrls": "https://i.gkd.li/i/23263036"
        }
      ]
    }
  ]
} as any);
