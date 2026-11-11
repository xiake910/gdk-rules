// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
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
      ],
      "enable": false
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
