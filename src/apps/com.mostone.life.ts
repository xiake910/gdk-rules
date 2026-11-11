// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mostone.life",
  "name": "默往",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": "[id=\"android:id/content\"] >n FrameLayout[childCount=4] > View",
      "snapshotUrls": "https://i.gkd.li/import/13832104",
      "order": -10
    }
  ]
} as any);
