// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      "enable": false
    }
  ]
} as any);
