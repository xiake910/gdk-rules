// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youloft.icloser",
  "name": "心动日常",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-购买会员弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".view.dialog.VipRetainPacketDialog",
          "matches": "[vid=\"tv_later_buy\"]",
          "snapshotUrls": "https://i.gkd.li/i/13067183"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右下角悬浮窗小广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13164387"
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-购买会员-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.youloft.icloser.view.dialog.VipRetainPacketDialog",
      "rules": "[id=\"com.youloft.icloser:id/tv_later_buy\"]",
      "snapshotUrls": "https://i.gkd.li/import/13067183"
    }
  ]
} as any);
