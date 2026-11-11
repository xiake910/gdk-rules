// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hanweb.android.zhejiang.activity",
  "name": "浙里办",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "actionMaximum": 1,
          "matches": "@[vid=\"iv_cancel\"] -2 * >2 [text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402048"
        },
        {
          "key": 1,
          "actionMaximumKey": 0,
          "matches": "LinearLayout[childCount=2] > LinearLayout[childCount=2] > [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13520598"
        },
        {
          "preKeys": [
            1
          ],
          "key": 2,
          "matches": "[text=\"版本更新\"] - [vid=\"rl_back\"]",
          "snapshotUrls": "https://i.gkd.li/i/13521059"
        }
      ]
    }
  ]
} as any);
