// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.facetech.konking",
  "name": "人民日报",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12841081"
        }
      ],
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-应用内广告弹窗",
      "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
      "rules": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
      "snapshotUrls": "https://i.gkd.li/import/12841081",
      "enable": false
    }
  ]
} as any);
