// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.guodongbaohe.app",
  "name": "果冻宝盒",
  "groups": [
    {
      "key": 6,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.AdvertisementTwoActivity",
          "matches": "LinearLayout[vid=\"close_dialog_lv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13577877"
        }
      ],
      "enable": true
    },
    {
      "enable": true,
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.guodongbaohe.app.activity.AdvertisementTwoActivity",
      "rules": "LinearLayout[id=\"com.guodongbaohe.app:id/close_dialog_lv\"]",
      "snapshotUrls": "https://i.gkd.li/import/13577877"
    }
  ]
} as any);
