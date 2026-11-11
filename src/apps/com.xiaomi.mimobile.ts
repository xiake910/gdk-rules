// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.mimobile",
  "name": "小米移动",
  "groups": [
    {
      "key": 1,
      "name": "评价提示",
      "rules": [
        {
          "activityIds": ".activity.XiaomiMobileMainActivity",
          "matches": "@ImageView[desc=null] < [desc=\"「小米移动」使用体验调查\"]",
          "snapshotUrls": "https://i.gkd.li/i/23227230"
        }
      ],
      "enable": false
    }
  ]
} as any);
