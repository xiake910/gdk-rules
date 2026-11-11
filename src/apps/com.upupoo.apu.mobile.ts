// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.upupoo.apu.mobile",
  "name": "UPUPOO动态壁纸",
  "groups": [
    {
      "key": 1,
      "name": "青少年模式",
      "desc": "点击\"我知道了\"",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"青少年模式\"] +3 [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/14052188"
        }
      ],
      "enable": false
    },
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView",
      "snapshotUrls": [
        "https://i.gkd.li/import/13830230",
        "https://i.gkd.li/import/14052232"
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
