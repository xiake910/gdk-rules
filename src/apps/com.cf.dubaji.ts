// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cf.dubaji",
  "name": "毒霸姬",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "key": 0,
          "activityIds": ".module.main.MainActivity",
          "matches": "[vid=\"dlg_action_positive\"][text=\"立即更新\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/13198107"
        }
      ],
      "enable": false
    }
  ]
} as any);
