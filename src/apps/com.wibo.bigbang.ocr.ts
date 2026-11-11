// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wibo.bigbang.ocr",
  "name": "布丁扫描",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.vivo.upgradelibrary.upmode.appdialog.VivoUpgradeActivityDialog",
          "matches": "[vid=\"vivo_upgrade_negative_btn\"][text=\"忽略本次\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360281"
        }
      ]
    }
  ]
} as any);
