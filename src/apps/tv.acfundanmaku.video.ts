// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tv.acfundanmaku.video",
  "name": "AcFun",
  "groups": [
    {
      "key": 2,
      "name": "青少年模式",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "tv.acfun.core.module.main.MainActivity",
          "matches": "[id=\"tv.acfundanmaku.video:id/btnSimpleDialogOne\"]",
          "exampleUrls": "https://m.gkd.li/6328439/8229e6ec-f1d6-4162-96ad-c3a6b74877c7",
          "snapshotUrls": "https://i.gkd.li/import/13518737"
        }
      ],
      "enable": false
    }
  ]
} as any);
