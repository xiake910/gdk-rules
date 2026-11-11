// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.ruijie.magicbox",
  "name": "无线魔盒",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.com.ruijie.wifibox.activity.MainActivity",
          "matches": "@ImageView[vid=\"imageView_close\"] +(2) RelativeLayout > LinearLayout > [text*=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642359"
        }
      ]
    }
  ]
} as any);
