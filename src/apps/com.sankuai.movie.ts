// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
