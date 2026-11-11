// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kuaikan.comic",
  "name": "快看漫画",
  "groups": [
    {
      "key": 2,
      "name": "局部广告-漫画界面底部弹窗广告",
      "activityIds": ".infinitecomic.view.ComicInfiniteActivity",
      "rules": "[vid=\"adBannerClose\"]",
      "snapshotUrls": "https://i.gkd.li/i/12910268",
      "enable": true
    },
    {
      "key": 1,
      "name": "青少年模式",
      "activityIds": "com.kuaikan.main.MainActivity",
      "rules": "[text*=\"青少年模式\"] +2 [id=\"com.kuaikan.comic:id/cancel\"]",
      "snapshotUrls": "https://i.gkd.li/import/12565678",
      "enable": false
    },
    {
      "key": 3000,
      "name": "局部广告-漫画界面-底部广告弹窗",
      "activityIds": "com.kuaikan.comic.infinitecomic.view.ComicInfiniteActivity",
      "rules": "[id=\"com.kuaikan.comic:id/adBannerClose\"]",
      "snapshotUrls": "https://i.gkd.li/import/12910268",
      "enable": true
    }
  ]
} as any);
