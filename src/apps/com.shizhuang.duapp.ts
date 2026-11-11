// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
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
