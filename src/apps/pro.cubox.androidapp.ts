// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "pro.cubox.androidapp",
  "name": "Cubox",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-会员广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.pro.ProAccountActivity",
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)] - [text*=\"支付\"] <5 View[childCount=6] < [vid=\"newCV\"]",
          "exampleUrls": "https://e.gkd.li/a51b01f3-d690-4bdf-9db1-f40e05212b11",
          "snapshotUrls": "https://i.gkd.li/i/20708841"
        }
      ],
      "enable": false
    }
  ]
} as any);
