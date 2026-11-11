// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.whpe.qrcode.hunan_xiangtan",
  "name": "湘潭出行",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "key": 0,
          "name": "快手广告",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"interact_ad_root\"] > [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476265"
        }
      ]
    }
  ]
} as any);
