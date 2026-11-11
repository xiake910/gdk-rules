// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "enfc.metro",
  "name": "亿通行",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-出站后摇一摇广告",
      "desc": "点击跳过",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".session.web.rn.RPReactActivity",
          "matches": "@View[clickable=true] - * [text=\"扭动手机\"]",
          "snapshotUrls": "https://i.gkd.li/i/13988597"
        }
      ],
      "enable": true
    }
  ]
} as any);
