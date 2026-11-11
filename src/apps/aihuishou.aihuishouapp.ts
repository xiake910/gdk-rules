// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "aihuishou.aihuishouapp",
  "name": "爱回收",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "matches": "ImageView + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/28374178"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".recycle.activity.RecycleIndexActivity",
          "matches": "@View[width<162 && height<162] <2 View <2 [childCount=2] < ComposeView < * < ViewGroup < [childCount=6] < * < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/28466056"
        }
      ]
    }
  ]
} as any);
