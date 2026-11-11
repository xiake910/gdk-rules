// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      "enable": true
    }
  ]
} as any);
