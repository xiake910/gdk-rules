// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.youpin",
  "name": "小米有品",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": ".globalpopwindow.popwindow.PopWindowActivity",
          "matches": "WebView[text=\"有品\"] > View > View[childCount=2] > Image[index=1][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14964897",
            "https://i.gkd.li/i/12836727"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "更新提示-版本升级弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".globalpopwindow.popwindow.PopWindowActivity",
          "matches": "[vid=\"ypd_alert_close_image\"]",
          "snapshotUrls": "https://i.gkd.li/i/12836775"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "局部广告-主页贴片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.YouPinMainTabActivity",
          "matches": "[vid=\"iv_float_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15879481"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "activityIds": [
        "com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity"
      ],
      "rules": [
        {
          "matches": "@Image <2 View[childCount=2] < [id=\"app\"] < [text=\"有品\"] < * < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12836727"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
