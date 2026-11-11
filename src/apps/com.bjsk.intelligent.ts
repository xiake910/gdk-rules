// 自动生成, 请勿手改（规则来源: 667 v631 (镜像 gkd667.vv.ax) + AIsouler v406 (已停更) + 甘霖 v72 (MIT)）
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
