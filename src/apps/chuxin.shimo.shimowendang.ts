// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "chuxin.shimo.shimowendang",
  "name": "石墨文档",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-首页顶部横幅广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[desc=\"banner-desktop-announcement-close\"][visibleToUser=true] - ViewGroup > [text*=\"免费试用企业版\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627960"
        }
      ],
      "enable": false
    }
  ]
} as any);
