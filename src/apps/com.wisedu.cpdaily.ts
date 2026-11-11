// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wisedu.cpdaily",
  "name": "今日校园",
  "groups": [
    {
      "key": 2,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.wisorg.wisedu.home.ui.HomeActivity",
          "matches": "[vid=\"btn_update\"] + [vid=\"tv_ignore\"]",
          "snapshotUrls": "https://i.gkd.li/i/13643565"
        }
      ],
      "enable": false
    }
  ]
} as any);
