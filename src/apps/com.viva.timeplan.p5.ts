// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.viva.timeplan.p5",
  "name": "烟花动漫",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "@ImageView[clickable=true] - RelativeLayout > [text=\"反馈\"]",
          "exampleUrls": "https://m.gkd.li/57941037/3bfe1e95-56ed-43f7-b40c-e523953e71f6",
          "snapshotUrls": "https://i.gkd.li/i/14481496"
        }
      ],
      "enable": false
    }
  ]
} as any);
