// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.honor.qinxuan",
  "name": "荣耀亲选",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[vid=\"iv_close_dlg\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930613"
        }
      ],
      "enable": false
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] < * > [text=\"开启消息通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/14946137"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "fastQuery": true,
      "name": "全屏广告-首页广告弹窗",
      "desc": "点击X",
      "rules": [
        {
          "matches": "[id=\"cn.honor.qinxuan:id/iv_close_dlg\"]",
          "snapshotUrls": "https://i.gkd.li/import/13930613"
        }
      ],
      "enable": false
    }
  ]
} as any);
