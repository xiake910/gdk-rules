// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
