// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.taobao.litetao",
  "name": "淘特",
  "groups": [
    {
      "key": 1,
      "name": "更新提示-版本升级弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.taobao.ltao.maintab.MainFrameActivity",
            ".launcher.ALiFlutterActivityCompat"
          ],
          "matches": "[id = \"com.taobao.litetao:id/update_imageview_cancel_v2\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843615",
            "https://i.gkd.li/i/12843614"
          ]
        }
      ]
    },
    {
      "key": 0,
      "name": "开屏广告",
      "activityIds": "com.taobao.ltao.maintab.MainFrameActivity",
      "rules": "[id=\"com.taobao.litetao:id/root_layout\"] > TextView[text^=\"还剩\"&&text$=\"秒\"]",
      "snapshotUrls": "https://i.gkd.li/import/12774851",
      "order": -10
    },
    {
      "key": 3000,
      "name": "更新提示",
      "activityIds": [
        "com.taobao.ltao.maintab.MainFrameActivity",
        "com.taobao.litetao.launcher.ALiFlutterActivityCompat"
      ],
      "rules": "[id = \"com.taobao.litetao:id/update_imageview_cancel_v2\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12843615",
        "https://i.gkd.li/import/12843614"
      ],
      "enable": false
    }
  ]
} as any);
