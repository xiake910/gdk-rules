// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qihoo.camera",
  "name": "360摄像机",
  "groups": [
    {
      "key": 6,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "name": "云收藏弹窗广告",
          "actionMaximum": 1,
          "activityIds": "com.qihoo.jia.playpage.RecordPlayActivity",
          "matches": "@ImageView[clickable=true] +4 TextView[text=\"去开通\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630755"
        }
      ],
      "enable": false
    },
    {
      "key": 7,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.qihoo.jia.ui.activity.TabMainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/c88cdec7-e6da-4bbf-821c-76459d0daff9",
          "snapshotUrls": "https://i.gkd.li/i/17656326"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-卡录像界面广告",
      "actionMaximum": 1,
      "activityIds": "com.qihoo.jia.playpage.RecordPlayActivity",
      "rules": [
        {
          "name": "视频下方卡片式广告",
          "matches": "ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]"
        },
        {
          "name": "云收藏弹窗广告",
          "matches": "ViewGroup > @ImageView[clickable=true] -n TextView[text=\"云收藏\"]"
        }
      ],
      "snapshotUrls": "https://i.gkd.li/import/13630755",
      "enable": false
    }
  ]
} as any);
