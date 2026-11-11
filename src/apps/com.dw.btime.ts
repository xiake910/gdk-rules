// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dw.btime",
  "name": "亲宝宝",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainHomeTabActivity",
          "matches": "[vid=\"iv_overlay_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12889448"
        }
      ],
      "enable": true
    },
    {
      "key": 2,
      "name": "局部广告-横幅广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainHomeTabActivity",
          "matches": "[vid=\"old_baby_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12889450"
        }
      ],
      "enable": true
    },
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".base_library.dialog.DWBaseDialog",
          "matches": "[vid=\"iv_upgrade_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12911011"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-应用内弹窗",
      "fastQuery": true,
      "activityIds": "com.dw.btime.MainHomeTabActivity",
      "rules": "[id=\"com.dw.btime:id/iv_overlay_close\"][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/12889448",
      "enable": true
    },
    {
      "key": 3001,
      "name": "局部广告-应用内横幅",
      "fastQuery": true,
      "activityIds": "com.dw.btime.MainHomeTabActivity",
      "rules": "[id=\"com.dw.btime:id/old_baby_close\"][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/12889450",
      "enable": true
    }
  ]
} as any);
