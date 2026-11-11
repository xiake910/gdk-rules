// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "activityIds": "org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity",
      "rules": "ImageView -2 ImageView + FrameLayout > ImageView",
      "snapshotUrls": "https://i.gkd.li/import/13402608",
      "enable": true
    }
  ]
} as any);
