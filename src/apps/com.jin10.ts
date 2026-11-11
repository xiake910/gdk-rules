// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jin10",
  "name": "金十数据",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".lgd.update.UpdateActivity",
          "matches": "@[vid=\"update_cancel\"] + [vid=\"iv_pic\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706043"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".lgd.biz.MainActivity",
          "matches": "[id$=\"iv_body\" || id$=\"iv_pic\" || vid=\"body_ad\"] <n [visibleToUser=true] > [vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706045",
            "https://i.gkd.li/i/12706047",
            "https://i.gkd.li/i/31375320"
          ]
        }
      ],
      "enable": false
    },
    {
      "key": 10,
      "name": "局部广告-会员页面顶部广告",
      "rules": [
        {
          "activityIds": ".lgd.biz.MainActivity",
          "matches": "[vid=\"iv_header\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706051"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.jin10.lgd.biz.MainActivity",
          "matches": "[id=\"com.jin10:id/iv_body\"] + [id=\"com.jin10:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706045"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-快讯页面弹窗广告",
      "rules": [
        {
          "activityIds": "com.jin10.lgd.biz.MainActivity",
          "matches": "@[id=\"com.jin10:id/iv_close\"] + [id=\"com.jin10:id/iv_pic\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706047"
        }
      ],
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-首页广告弹窗",
      "activityIds": [
        "com.jin10.lgd.biz.MainActivity"
      ],
      "rules": "[id=\"com.jin10:id/iv_body\"] + [id=\"com.jin10:id/iv_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12706045"
      ],
      "enable": false
    },
    {
      "key": 3002,
      "name": "全屏广告-快讯页面-广告弹窗",
      "activityIds": [
        "com.jin10.lgd.biz.MainActivity"
      ],
      "rules": "@[id=\"com.jin10:id/iv_close\"] + [id=\"com.jin10:id/iv_pic\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12706047"
      ],
      "enable": false
    },
    {
      "enable": false,
      "key": 3003,
      "name": "局部广告-会员页面-顶部广告",
      "activityIds": [
        "com.jin10.lgd.biz.MainActivity"
      ],
      "rules": "[id=\"com.jin10:id/iv_header\"] + [id=\"com.jin10:id/iv_close\"]",
      "snapshotUrls": [
        "https://i.gkd.li/import/12706051"
      ]
    }
  ]
} as any);
