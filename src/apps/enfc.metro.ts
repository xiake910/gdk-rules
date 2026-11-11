// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
    }
  ]
} as any);
