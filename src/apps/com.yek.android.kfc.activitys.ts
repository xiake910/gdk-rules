// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yek.android.kfc.activitys",
  "name": "肯德基",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": "[id=`com.yek.android.kfc.activitys:id/splash_tv_3`]",
      "order": -10,
      "enable": true
    }
  ]
} as any);
