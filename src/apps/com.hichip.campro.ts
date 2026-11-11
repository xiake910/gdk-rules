// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hichip.campro",
  "name": "CamHipro",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "main.MainActivity",
          "matches": "[vid=\"iv_close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/15847732"
        }
      ]
    }
  ]
} as any);
