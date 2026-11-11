// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yek.android.uniqlo",
  "name": "优衣库",
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
          "activityIds": ".uiux.Home.activity.HomeActivity",
          "matches": "ImageView[vid=\"pop_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13212320"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.WelcomeActivity",
          "matches": "@TextView[text=\"取消\"] + TextView[text=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/13446421"
        }
      ]
    }
  ]
} as any);
