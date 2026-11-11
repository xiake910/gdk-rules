// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.daimhim.zzzfun",
  "name": "ZzzFun",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": ".ui.home.video.VideoDetailsActivity",
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402608"
        }
      ]
    }
  ]
} as any);
