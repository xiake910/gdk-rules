// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
