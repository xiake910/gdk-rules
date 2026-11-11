// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ukids.client.phone",
  "name": "小小优趣",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".parent.ParentClientHomeActivity",
          "matches": "[vid=\"dialog_dismiss_btn_two\"]",
          "snapshotUrls": "https://i.gkd.li/i/13400238"
        }
      ]
    }
  ]
} as any);
