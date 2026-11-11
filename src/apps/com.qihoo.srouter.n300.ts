// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
    }
  ]
} as any);
