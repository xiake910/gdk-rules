// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.damai",
  "name": "大麦",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "该规则需要在高级设置中开启[启用优化]才能生效",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 8000,
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[vid=\"homepage_advert_pb\"]",
          "snapshotUrls": "https://i.gkd.li/i/14585402",
          "exampleUrls": "https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd"
        }
      ],
      "order": -10
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".homepage.MainActivity",
          "matches": "[vid=\"homepage_popup_window_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627900"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".homepage.MainActivity",
          "matches": "[vid=\"damai_theme_dialog_close_layout\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24213790"
        }
      ]
    }
  ]
} as any);
