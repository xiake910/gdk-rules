// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.maque.app",
  "name": "麻雀省钱",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页活动弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]",
          "snapshotUrls": "https://i.gkd.li/i/12640100"
        }
      ]
    }
  ]
} as any);
