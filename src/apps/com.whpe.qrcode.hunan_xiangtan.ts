// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
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
      ],
      "enable": true
    }
  ]
} as any);
