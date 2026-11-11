// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.bjsk.intelligent",
  "name": "WiFi智能钥匙",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-内部启动广告",
      "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
      "rules": [
        "Image < @View +4 TextView[text=`反馈`] + View TextView[text=`广告`]"
      ],
      "enable": false
    }
  ]
} as any);
