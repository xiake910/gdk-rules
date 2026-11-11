// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
