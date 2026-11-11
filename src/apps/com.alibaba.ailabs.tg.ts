// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alibaba.ailabs.tg",
  "name": "天猫精灵",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.HomeActivity",
          "matches": "[vid=\"ll_download\"] + [vid=\"va_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13296332"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-会员弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "key": 0,
          "activityIds": ".oneservice.cluster.services.h5alert.MarketingPopupWebViewActivity",
          "matches": "[text*=\"会员\"] -n @View[clickable=true][getChild(0).name$=\"Image\"] < View <2 View <2 View < View < WebView < WebView < [vid=\"webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/34570686"
        },
        {
          "key": 1,
          "position": {
            "left": "width * 0.9444",
            "top": "width * 1.0583"
          },
          "activityIds": "com.alibaba.ailabs.flutter.container.FlutterPaymentActivity",
          "matches": "FrameLayout > LinearLayout > [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/14443874",
          "exampleUrls": "https://m.gkd.li/57941037/4a823639-f400-4249-81ea-f920d09317f4"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-超级会员弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9444",
            "top": "width * 1.0583"
          },
          "activityIds": "com.alibaba.ailabs.flutter.container.FlutterPaymentActivity",
          "matches": "FrameLayout > LinearLayout > [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/4a823639-f400-4249-81ea-f920d09317f4",
          "snapshotUrls": "https://i.gkd.li/i/14443874"
        }
      ],
      "enable": false
    }
  ]
} as any);
