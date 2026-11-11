// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
      ]
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
