// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      "enable": true
    }
  ]
} as any);
