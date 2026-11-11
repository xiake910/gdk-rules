// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaoxiongyhh",
  "name": "小熊有好货",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 1,
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "matches": "View[childCount=2] > ImageView + Button[childCount=0][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13401975"
        }
      ]
    }
  ]
} as any);
