// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sqsp.movie",
  "name": "视趣",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] -(2,4) @View[visibleToUser=true][childCount=1] > Image[text=\"\"]",
          "exampleUrls": "https://m.gkd.li/57941037/640c42bf-5279-4ab5-a3bc-e264a99af2ac",
          "snapshotUrls": [
            "https://i.gkd.li/i/15342445",
            "https://i.gkd.li/i/15374240"
          ]
        }
      ],
      "enable": true
    }
  ]
} as any);
