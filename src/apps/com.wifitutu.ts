// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wifitutu",
  "name": "WiFi万能钥匙",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-首页-WiFi列表广告",
      "desc": "点击关闭",
      "rules": [
        {
          "key": 1,
          "fastQuery": true,
          "activityIds": ".ui.main.MainActivity",
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13233916"
        },
        {
          "key": 2,
          "fastQuery": true,
          "activityIds": ".ui.main.MainActivity",
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[visibleToUser=true][text=\"广告\"] <<n [vid=\"ad_part\"]",
          "snapshotUrls": "https://i.gkd.li/i/13234048"
        }
      ]
    }
  ]
} as any);
