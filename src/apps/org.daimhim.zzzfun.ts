// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "activityIds": "org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity",
      "rules": "ImageView -2 ImageView + FrameLayout > ImageView",
      "snapshotUrls": "https://i.gkd.li/import/13402608",
      "enable": false
    }
  ]
} as any);
