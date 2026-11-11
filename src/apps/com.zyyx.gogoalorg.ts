// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zyyx.gogoalorg",
  "name": "Go-Goal",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.AdvertrisementActivity",
          "matches": "RelativeLayout[childCount=3] > [vid=\"iv_bottom_view\"] - [text$=\"跳转\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26194519"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
