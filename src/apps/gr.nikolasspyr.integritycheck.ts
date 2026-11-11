// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "gr.nikolasspyr.integritycheck",
  "name": "Play Integrity API Checker",
  "groups": [
    {
      "key": 1,
      "name": "功能类-自动[检测]设备完整性",
      "desc": "初进app时,点击1次[CHECK]",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 3000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity",
          "matches": "Button[vid=\"check_btn\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/30591423",
          "exampleUrls": "https://e.gkd.li/200428fa-7a39-4ffe-86b5-2218d4e24b65"
        }
      ],
      "enable": false
    }
  ]
} as any);
