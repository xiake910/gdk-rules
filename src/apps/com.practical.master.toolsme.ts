// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.practical.master.toolsme",
  "name": "实用大师",
  "groups": [
    {
      "key": 6,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "字节穿山甲SDK",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image[width<60][height<60] < @View <n View [text=\"反馈\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13581740",
            "https://i.gkd.li/i/13582110"
          ]
        }
      ]
    },
    {
      "key": 3000,
      "name": "全屏广告-广告弹窗",
      "rules": [
        {
          "name": "字节穿山甲SDK",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image[width<60][height<60] < @View <n View [text=\"反馈\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13581740",
            "https://i.gkd.li/import/13582110"
          ]
        }
      ],
      "enable": false
    }
  ]
} as any);
