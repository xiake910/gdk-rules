// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.yonghui.hyd",
  "name": "永辉生活",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-红包弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 1,
          "name": "好券即将过期弹窗",
          "activityIds": ".coupon.couponfactory.CouponFactoryActivity",
          "matches": [
            "[vid=\"advance\" || vid=\"couponsWillGoneHeaderIv\"]",
            "[vid=\"close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13414401",
            "https://i.gkd.li/i/13414444"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-优惠卷弹窗",
      "fastQuery": true,
      "activityIds": ".coupon.couponfactory.CouponFactoryActivity",
      "rules": [
        {
          "anyMatches": [
            "@TextView[id=\"cn.yonghui.hyd:id/close\"] -n [id=\"cn.yonghui.hyd:id/title\"][text=\"天降红包\"]",
            "@ImageView[id=\"cn.yonghui.hyd:id/close\"] -n [id=\"cn.yonghui.hyd:id/couponsWillGoneHeaderIv\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13414401",
            "https://i.gkd.li/import/13414444"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
