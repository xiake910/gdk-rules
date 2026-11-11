// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": true
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
      "enable": true
    }
  ]
} as any);
