// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sankuai.movie",
  "name": "猫眼",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-开启通知弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - * > [text=\"开启通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/18455375"
        }
      ]
    },
    {
      "key": 3000,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": "[text^=\"更新\"] +(3) LinearLayout > [text=\"取消\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12649942",
        "https://i.gkd.li/import/12649938",
        "https://i.gkd.li/import/13799885"
      ],
      "enable": false
    }
  ]
} as any);
