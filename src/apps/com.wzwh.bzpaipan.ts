// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wzwh.bzpaipan",
  "name": "问真八字排盘",
  "groups": [
    {
      "key": 3,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "matches": "@ImageView[clickable=true] < LinearLayout[childCount=1] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/13162912"
        }
      ]
    }
  ]
} as any);
