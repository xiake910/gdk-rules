// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shizhuang.duapp",
  "name": "得物",
  "groups": [
    {
      "key": 4,
      "name": "其他-截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".modules.product_detail.detailv4.ui.ProductDetailActivityV4",
          "matches": "[vid=\"ivClose\"] +2 [vid=\"ivSave\"]",
          "snapshotUrls": "https://i.gkd.li/i/13473449"
        }
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3000,
      "name": "功能类-截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "fastQuery": true,
      "activityIds": "com.shizhuang.duapp.modules.product_detail.detailv4.ui.ProductDetailActivityV4",
      "rules": "[id=\"com.shizhuang.duapp:id/ivClose\"] +2 [id=\"com.shizhuang.duapp:id/ivSave\"]",
      "snapshotUrls": "https://i.gkd.li/import/13473449"
    }
  ]
} as any);
