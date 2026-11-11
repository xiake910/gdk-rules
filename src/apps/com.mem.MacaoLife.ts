// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mem.MacaoLife",
  "name": "澳覓",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.mem.life.ui.launch.LaunchActivity",
          "matches": "[vid=\"cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350665"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "局部广告-浮窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mem.life.ui.home.HomeActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350685"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "权限提示-開啟通知提示",
      "fastQuery": true,
      "activityIds": "com.mem.life.ui.launch.LaunchActivity",
      "rules": "[id=\"com.mem.MacaoLife:id/cancel\"]",
      "snapshotUrls": "https://i.gkd.li/import/13350665",
      "enable": false
    },
    {
      "key": 3001,
      "name": "局部广告-浮窗廣告",
      "fastQuery": true,
      "activityIds": "com.mem.life.ui.home.HomeActivity",
      "rules": "[id=\"com.mem.MacaoLife:id/close\"]",
      "snapshotUrls": "https://i.gkd.li/import/13350685",
      "enable": true
    }
  ]
} as any);
