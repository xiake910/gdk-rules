// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.TuHu.android",
  "name": "途虎养车",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "matches": "@[vid=\"imgClose\"] - [vid=\"rlContent\"] > [vid=\"img_jump\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228818"
        }
      ],
      "enable": false
    },
    {
      "key": 10,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "matches": "[vid=\"imgClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13228796",
            "https://i.gkd.li/i/13256535"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "fastQuery": true,
      "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
      "rules": "@[id=\"cn.TuHu.android:id/imgClose\"] - [id=\"cn.TuHu.android:id/rlContent\"] > [id=\"cn.TuHu.android:id/img_jump\"]",
      "snapshotUrls": "https://i.gkd.li/import/13228818",
      "enable": false
    },
    {
      "key": 3001,
      "fastQuery": true,
      "name": "权限提示-请求通知权限弹窗",
      "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
      "rules": "[id=\"cn.TuHu.android:id/imgClose\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/13228796",
        "https://i.gkd.li/import/13256535"
      ],
      "enable": false
    }
  ]
} as any);
