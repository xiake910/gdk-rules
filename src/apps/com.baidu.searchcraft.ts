// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
    }
  ]
} as any);
