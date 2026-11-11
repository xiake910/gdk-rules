// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zuoyebang.knowledge",
  "name": "作业帮家长版",
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
          "matches": "[vid=\"cancel_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695522"
        }
      ]
    },
    {
      "key": 3,
      "name": "评价提示-赏好评弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.baidu.homework.activity.init.InitActivity",
          "matches": "TextView[vid=\"btn_cancle\"]",
          "snapshotUrls": "https://i.gkd.li/i/13043228"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-赏好评弹窗",
      "fastQuery": true,
      "activityIds": "com.baidu.homework.activity.init.InitActivity",
      "rules": "TextView[id=\"com.zuoyebang.knowledge:id/btn_cancle\"]",
      "snapshotUrls": "https://i.gkd.li/import/13043228",
      "enable": false
    }
  ]
} as any);
