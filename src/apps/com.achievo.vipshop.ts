// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.achievo.vipshop",
  "name": "唯品会",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-优惠券弹窗",
      "desc": "点击右上角x掉",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.LodingActivity",
          "matches": "@[vid=\"iv_close\"][visibleToUser=true] + [vid=\"coupon_la_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/33897647",
          "exampleUrls": "https://e.gkd.li/ff0541e8-5e5a-48e3-9c48-23693d76b91e"
        }
      ]
    }
  ]
} as any);
