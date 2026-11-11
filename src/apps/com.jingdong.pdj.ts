// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jingdong.pdj",
  "name": "京东到家",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "pdj.main.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "WebView[text=\"京东到家\"] >5 @View[clickable=true][childCount=1][visibleToUser=true] > View[childCount=1] > TextView[childCount=0] <<n [vid=\"mWebView\"]",
          "snapshotUrls": "https://i.gkd.li/i/13217796"
        },
        {
          "key": 1,
          "matches": "[vid=\"ivClose\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13223282"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".plunginupdate.update.UpdateDialogActivity",
          "matches": "Button[text=\"暂不安装\"]",
          "snapshotUrls": "https://i.gkd.li/i/13217634"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-首页广告弹窗",
      "matchTime": 10000,
      "activityIds": "pdj.main.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "WebView[text=\"京东到家\"] >7 TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/import/13217796"
        },
        {
          "key": 1,
          "fastQuery": true,
          "matches": "[id=\"com.jingdong.pdj:id/ivClose\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/import/13223282"
        }
      ],
      "enable": false
    }
  ]
} as any);
