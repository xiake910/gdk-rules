// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.huanji",
  "name": "小米换机",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@[text=\"下次再说\"] + [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/14332463"
        }
      ],
      "enable": false
    }
  ]
} as any);
