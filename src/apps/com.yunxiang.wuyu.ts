// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yunxiang.wuyu",
  "name": "特狗APP",
  "groups": [
    {
      "key": 2,
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13455634"
        }
      ],
      "enable": false
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 1,
          "name": "\"x\"型",
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13455628"
        },
        {
          "key": 2,
          "name": "\"跳过\"型",
          "matches": [
            "TextView[text=\"广告\"]",
            "@ViewGroup > TextView[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13455629"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.yunxiang.wuyu.MainActivity",
      "rules": "[desc^=\"人生嘛\"] +4 ImageView[clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/13455634",
      "enable": false
    },
    {
      "key": 3001,
      "name": "全屏广告-广告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.yunxiang.wuyu.MainActivity",
      "rules": [
        {
          "name": "【x】型",
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/13455628"
        },
        {
          "name": "【跳过】型",
          "matches": [
            "TextView[text=\"广告\"]",
            "@ViewGroup > TextView[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13455629"
        }
      ],
      "enable": false
    }
  ]
} as any);
