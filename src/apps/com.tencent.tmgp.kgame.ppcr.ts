// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.tmgp.kgame.ppcr",
  "name": "全民泡泡超人",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[id=\"com.tencent.ysdkcore:id/com_tencent_ysdk_icon_h5_xx\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276317"
        }
      ],
      "order": -10
    }
  ]
} as any);
