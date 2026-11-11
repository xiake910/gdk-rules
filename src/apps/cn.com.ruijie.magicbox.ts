// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.ruijie.magicbox",
  "name": "无线魔盒",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.com.ruijie.wifibox.activity.MainActivity",
          "matches": "@ImageView[vid=\"imageView_close\"] +(2) RelativeLayout > LinearLayout > [text*=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642359"
        }
      ],
      "enable": false
    }
  ]
} as any);
