// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
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
    }
  ]
} as any);
