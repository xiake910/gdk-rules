// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shangfang.gylm",
  "name": "高佣联盟",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".mvp.ui.home.activity.UpdateActivityV2",
          "matches": "[vid=\"iv_upgrade_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13643599"
        }
      ]
    }
  ]
} as any);
