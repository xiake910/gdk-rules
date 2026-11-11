// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
