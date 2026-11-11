// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.securityadd",
  "name": "系统服务组件",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-游戏加速弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.miui.gamebooster.GameBoosterRichWebActivity",
          "matches": "[text=\"活动图片\"] +2 @Image[clickable=true][childCount=0][visibleToUser=true] <<n [vid=\"content_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13914659",
            "https://i.gkd.li/i/14668629"
          ]
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-游戏加速广告弹窗",
      "desc": "点击X",
      "rules": [
        {
          "activityIds": "com.miui.gamebooster.GameBoosterRichWebActivity",
          "matches": "[id=\"com.miui.securityadd:id/webViewContainer\"] [text=\"活动图片\"] +2 Image[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/import/13914659"
        }
      ],
      "enable": false
    }
  ]
} as any);
