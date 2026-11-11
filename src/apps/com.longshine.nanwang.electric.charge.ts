// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.longshine.nanwang.electric.charge",
  "name": "顺易充",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.android.app.station.NewMainAct",
          "matches": "[vid=\"bodyFL\"] + [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700011"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": [
        "com.android.app.station.NewMainAct"
      ],
      "rules": "[id=\"com.longshine.nanwang.electric.charge:id/bodyFL\"] + [id=\"com.longshine.nanwang.electric.charge:id/ivClose\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12700011"
      ],
      "enable": false
    }
  ]
} as any);
