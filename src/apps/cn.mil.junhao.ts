// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.mil.junhao",
  "name": "中国军号",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"splash_adv_ship\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806892"
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 2,
      "name": "局部广告-右侧悬浮窗",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 [vid=\"float_feedback\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806896"
        },
        {
          "key": 1,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 FrameLayout <2 [vid=\"fragment_containerx\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806894"
        }
      ],
      "enable": true
    },
    {
      "key": 1,
      "name": "局部广告-首页右侧浮窗",
      "fastQuery": true,
      "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
      "rules": [
        {
          "matches": "@ImageView - FrameLayout - ImageView < FrameLayout <2 [id=\"cn.mil.junhao:id/fragment_containerx\"]",
          "snapshotUrls": "https://i.gkd.li/import/13806894"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "局部广告-意见反馈浮窗",
      "fastQuery": true,
      "activityIds": "com.mediacloud.app.nav2.AppHome21Style",
      "rules": [
        {
          "matches": "@ImageView - FrameLayout - ImageView < [id=\"cn.mil.junhao:id/float_feedback\"]",
          "snapshotUrls": "https://i.gkd.li/import/13806896"
        }
      ],
      "enable": true
    }
  ]
} as any);
