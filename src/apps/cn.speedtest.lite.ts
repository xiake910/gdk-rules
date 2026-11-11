// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.speedtest.lite",
  "name": "网速管家极速版",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": "@[vid=\"iv_close\"] - [vid=\"ll_main_pane\"] >2 [vid=\"tv_upgrade_content\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715483"
        }
      ]
    },
    {
      "key": 10,
      "name": "全屏广告-新人专享优惠弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": "@[vid=\"iv_close\"] - RelativeLayout >n [vid=\"ad_banner\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715511"
        }
      ]
    }
  ]
} as any);
