// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.livelab",
  "name": "纷玩岛",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@Button[clickable=true][childCount=0][visibleToUser=true] <2 View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13258873"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "fastQuery": true,
      "activityIds": "cn.com.livelab.MainActivity",
      "rules": "@Button - ImageView < View < View < View < View < FrameLayout < FrameLayout < FrameLayout[id=\"android:id/content\"]",
      "snapshotUrls": "https://i.gkd.li/import/13258873",
      "enable": false
    }
  ]
} as any);
