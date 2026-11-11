// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
    }
  ]
} as any);
