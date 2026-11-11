// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.karaoke",
  "name": "全民K歌",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 0,
          "name": "动态页面-卡片广告",
          "fastQuery": true,
          "activityIds": ".module.main.ui.MainTabActivity",
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13334798"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "key": 1,
          "name": "活动弹窗",
          "activityIds": ".module.splash.ui.SplashBaseActivity",
          "matches": "ViewGroup[childCount=0] < @ViewGroup[clickable=true][childCount=1] - ViewGroup > [desc*=\"双十一\"]",
          "snapshotUrls": "https://i.gkd.li/i/13363281"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-卡片式广告",
      "rules": [
        {
          "key": 0,
          "name": "动态页面-卡片式广告",
          "activityIds": "com.tencent.karaoke.module.main.ui.MainTabActivity",
          "matches": "RelativeLayout > [text=\"广告\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/import/13334798"
        }
      ],
      "enable": false
    }
  ]
} as any);
