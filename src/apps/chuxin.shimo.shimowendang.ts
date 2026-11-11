// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
    }
  ]
} as any);
