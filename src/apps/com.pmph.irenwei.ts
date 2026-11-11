// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pmph.irenwei",
  "name": "人卫",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-抽奖弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.pmph.main.ad.AdActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13897421"
        }
      ],
      "enable": false
    }
  ]
} as any);
