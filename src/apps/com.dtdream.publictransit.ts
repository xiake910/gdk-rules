// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dtdream.publictransit",
  "name": "杭州公共交通",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.dtchuxing.main.MainActivity",
          "matches": "[vid=\"ifv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12830113"
        }
      ],
      "enable": true
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "activityIds": "com.dtchuxing.main.MainActivity",
      "rules": "[id=\"com.dtdream.publictransit:id/ifv_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12830113",
      "enable": true
    }
  ]
} as any);
