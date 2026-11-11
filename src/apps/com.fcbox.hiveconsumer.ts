// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fcbox.hiveconsumer",
  "name": "丰巢",
  "groups": [
    {
      "key": 7,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "kt.com.fcbox.hiveconsumer.app.business.main.MainActivity",
          "matches": "[text*=\"优惠券\"] + @[vid=\"img_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/22455763"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "kt.com.fcbox.hiveconsumer.app.business.main.MainActivity",
            "kt.com.fcbox.hiveconsumer.app.business.membership.MemberCenterActivityV2"
          ],
          "matches": "[vid=\"ivClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22724047",
            "https://i.gkd.li/i/22724105"
          ]
        }
      ],
      "enable": true
    },
    {
      "key": 8,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "kt.com.fcbox.hiveconsumer.app.business.main.MainActivity",
          "matches": "[text*=\"会员已过期\"] + [vid=\"close_img\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24560868"
        }
      ],
      "enable": true
    }
  ]
} as any);
