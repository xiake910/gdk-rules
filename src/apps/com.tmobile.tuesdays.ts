// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tmobile.tuesdays",
  "name": "T-Life",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "key": 1,
          "fastQuery": true,
          "activityIds": "com.telekom.tworld.dashboard.DashboardActivity",
          "matches": "Button[text=\"See full details\"][index=parent.childCount.minus(1)] <n View -n @[desc=\"Close\"][clickable=true] < [id=\"screen-offer\"] < WebView <<2 * - * >2 [vid=\"action_bar_root\"]",
          "snapshotUrls": "https://i.gkd.li/i/32868780",
          "exampleUrls": "https://e.gkd.li/3a0b5df5-dbaa-461a-a61d-bdb7b54dafc1"
        }
      ],
      "enable": true
    }
  ]
} as any);
