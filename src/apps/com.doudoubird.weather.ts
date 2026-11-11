// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.doudoubird.weather",
  "name": "最准天气",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"ad_view\"] + [vid=\"delete_icon\"]",
          "exampleUrls": "https://e.gkd.li/2a61d3de-6117-4d85-8f4d-565f6ee00a57",
          "snapshotUrls": "https://i.gkd.li/i/17358146"
        }
      ]
    }
  ]
} as any);
