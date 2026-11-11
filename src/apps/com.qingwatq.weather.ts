// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qingwatq.weather",
  "name": "呱呱天气",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "activityIds": ".home.HomeActivity",
          "matches": "[vid=\"titleArea\"] + [vid=\"closeImg\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476350"
        }
      ]
    },
    {
      "key": 3000,
      "name": "局部广告-卡片式广告",
      "rules": [
        {
          "key": 0,
          "activityIds": "com.qingwatq.weather.home.HomeActivity",
          "matches": "[id=\"com.qingwatq.weather:id/titleArea\"] + [id=\"com.qingwatq.weather:id/closeImg\"]",
          "snapshotUrls": "https://i.gkd.li/import/13476350"
        }
      ],
      "enable": false
    }
  ]
} as any);
