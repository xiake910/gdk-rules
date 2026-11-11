// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.modian.app",
  "name": "摩点",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-[我的]界面广告条",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[vid=\"fl_banner_layout\"] > [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13610188"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-「我的」界面广告条",
      "activityIds": "com.modian.app.ui.activity.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.modian.app:id/banner_view\"] + [id=\"com.modian.app:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13610188"
        }
      ],
      "enable": false
    }
  ]
} as any);
