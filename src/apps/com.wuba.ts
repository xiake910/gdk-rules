// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wuba",
  "name": "58同城",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": [
            ".activity.more.MoreMainActivity",
            ".home.activity.HomeActivity"
          ],
          "matches": "Button[text*=\"立即更新\"] <n LinearLayout + ImageView[vid=\"close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25789427"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".home.activity.HomeActivity",
          "matches": "[text=\"去评价\"] - [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/25789452"
        }
      ],
      "enable": false
    }
  ]
} as any);
