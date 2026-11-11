// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shanxiang.wangxiao",
  "name": "山香网校",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "fastQuery": true,
          "matches": "[vid=\"iv_advertising\"] + [vid=\"countDownView\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26356382"
        }
      ],
      "order": -10,
      "enable": true
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.main.MainFragmentActivity",
          "matches": "[vid=\"iv_ad\"] + [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/32035807",
          "exampleUrls": "https://e.gkd.li/284033d3-fd1b-4e24-92ab-d807c7ddbde7"
        }
      ],
      "enable": false
    }
  ]
} as any);
