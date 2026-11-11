// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lanjinger.choiassociatedpress",
  "name": "财联社",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.OperateActivity",
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13749206"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-首页-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.lanjinger.choiassociatedpress.main.OperateActivity",
      "rules": "@ImageView[id$=\"iv_back\"][clickable=true]",
      "snapshotUrls": "https://i.gkd.li/import/13749206"
    }
  ]
} as any);
