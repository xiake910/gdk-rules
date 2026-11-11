// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shinyv.cnr",
  "name": "云听",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "yt.com.module.home.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "exampleUrls": "https://e.gkd.li/d1680c51-70c8-4d50-9560-f5e091685ee8",
          "snapshotUrls": "https://i.gkd.li/i/16914130"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": "yt.com.module.home.MainActivity",
      "rules": "[id=\"com.shinyv.cnr:id/iv_ad\"] + [id=\"com.shinyv.cnr:id/iv_close\"]",
      "snapshotUrls": "https://i.gkd.li/import/12817933",
      "enable": false
    }
  ]
} as any);
