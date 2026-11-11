// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.spdb.mobilebank.per",
  "name": "浦发银行",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭。",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.web.stage.StageCommonWebActivity",
          "matches": "[text=\"去开启\"] + View > Image[text.length=0]",
          "snapshotUrls": "https://i.gkd.li/i/13458535"
        }
      ]
    },
    {
      "key": 3000,
      "name": "权限提示-消息中心-系统通知请求",
      "desc": "自动点击关闭。",
      "fastQuery": true,
      "activityIds": ".activity.web.stage.StageCommonWebActivity",
      "rules": "@Image < View - TextView[text=\"去开启\"]",
      "snapshotUrls": "https://i.gkd.li/import/13458535",
      "enable": false
    }
  ]
} as any);
