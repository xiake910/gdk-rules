// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.llmm.huiyuanuxiang",
  "name": "囧次元",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[text!=null][childCount=0][visibleToUser=true] - View >2 [text=\"恭喜获得优惠券\"]",
          "exampleUrls": "https://e.gkd.li/12d1cfdb-9aa0-4688-8997-733611c0faaf",
          "snapshotUrls": "https://i.gkd.li/i/18129413"
        }
      ],
      "enable": true
    }
  ]
} as any);
