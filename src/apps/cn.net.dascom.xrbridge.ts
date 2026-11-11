// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.net.dascom.xrbridge",
  "name": "新睿桥牌",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.MainTabsActivity",
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27314278",
            "https://i.gkd.li/i/27316178"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
