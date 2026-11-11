// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qihoo.srouter.n300",
  "name": "360家庭防火墙",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ifenglian.superapp.ui.firewall.SAMainActivity",
          "matches": "[vid=\"app_update_later_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13800011"
        }
      ],
      "enable": false
    }
  ]
} as any);
