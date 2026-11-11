// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiangzi.dislikecn",
  "name": "Dislike",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "点击 跳过",
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "fastQuery": true,
      "rules": [
        {
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid=\"csj_ad_container\"]",
          "snapshotUrls": "https://i.gkd.li/import/15196702"
        }
      ],
      "order": -10,
      "enable": true
    }
  ]
} as any);
