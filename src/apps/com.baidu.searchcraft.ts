// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.searchcraft",
  "name": "简单搜索",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-信息流广告",
      "rules": [
        {
          "key": 0,
          "name": "快手广告",
          "activityIds": "com.baidu.browser.search.LightSearchActivity",
          "matches": "[desc=\"ad-logo\"] + [id=\"logo-close-btn\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13520385"
        }
      ]
    }
  ]
} as any);
