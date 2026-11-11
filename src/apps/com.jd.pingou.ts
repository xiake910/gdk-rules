// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jd.pingou",
  "name": "京喜",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.jd.jdlite.MainFrameActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] -2 [text^=\"开启定位授权\"]",
          "exampleUrls": "https://e.gkd.li/311e64ee-e775-41fb-b981-ceead0280ac7",
          "snapshotUrls": "https://i.gkd.li/i/13804515"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-底部申请定位浮窗",
      "activityIds": "com.jd.jdlite.MainFrameActivity",
      "rules": "[text*=\"开启定位授权\"] +2 ImageView",
      "snapshotUrls": "https://i.gkd.li/import/13804515",
      "enable": false
    }
  ]
} as any);
