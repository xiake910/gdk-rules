// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hlg.daydaytobusiness",
  "name": "稿定设计",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": "[text=\"现在升级\"] - TextView[text=\"以后再说\"]",
      "snapshotUrls": "https://i.gkd.li/import/13766557",
      "enable": false
    }
  ]
} as any);
