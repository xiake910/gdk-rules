// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.qt.sns",
  "name": "掌上穿越火线",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页活动弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"closebtn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13497978"
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
          "activityIds": "com.tencent.gamehelper.ui.main.MainActivity",
          "matches": [
            "[text=\"版本更新\" || text=\"现在升级\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13713478",
            "https://i.gkd.li/i/20851162"
          ]
        }
      ]
    }
  ]
} as any);
