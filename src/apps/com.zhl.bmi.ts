// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zhl.bmi",
  "name": "乐看视频",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255787",
            "https://i.gkd.li/i/13255786"
          ]
        },
        {
          "key": 1,
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "snapshotUrls": "https://i.gkd.li/i/13542343"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "desc": "点击右上角x",
      "activityIds": "com.zhl.bmi.MainActivity",
      "fastQuery": true,
      "rules": [
        "@ImageView < FrameLayout[childCount=1] <(2,3) FrameLayout <(1,2) FrameLayout < FrameLayout < [id=\"android:id/content\"]"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/import/13255787",
        "https://i.gkd.li/import/13255786",
        "https://i.gkd.li/import/13542343"
      ],
      "enable": false
    }
  ]
} as any);
