// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.craftvpn.craft",
  "name": "小牛加速器",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@View < View[childCount=2] < View[childCount=1] < View[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13914788"
        }
      ],
      "order": -10
    }
  ]
} as any);
