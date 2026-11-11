// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.csair.mbp",
  "name": "南方航空",
  "groups": [
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".CSMBPActivity",
          "matches": "[vid=\"close_btn\"]",
          "exampleUrls": "https://e.gkd.li/c6aeaf1c-e4d6-4b9c-a4bf-ee5b05d2bb30",
          "snapshotUrls": "https://i.gkd.li/i/13197497"
        }
      ],
      "enable": true
    },
    {
      "key": 4,
      "name": "功能类-长辈版弹窗",
      "desc": "点击[暂不开启]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".CSMBPActivity",
          "matches": "[text=\"开启长辈版\"] -2 [text=\"暂不开启\"]",
          "exampleUrls": "https://m.gkd.li/57941037/8744f8c6-7f9a-4f7b-a5c7-68de1701cd7b",
          "snapshotUrls": "https://i.gkd.li/i/14810700"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.csair.mbp.CSMBPActivity",
      "rules": "[id=\"com.csair.mbp:id/close_btn\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/13197497"
      ],
      "enable": true
    }
  ]
} as any);
