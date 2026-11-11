// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qingdaonews.bus",
  "name": "青岛公交查询",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"iv_native_dislike\"]",
          "snapshotUrls": "https://i.gkd.li/i/13467193"
        }
      ]
    }
  ]
} as any);
