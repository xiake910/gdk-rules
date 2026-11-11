// 自动生成, 请勿手改（规则来源: id667 订阅 v631, 合并时间 2026-11-11）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mj.mjyd",
  "name": "追漫大全",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "matches": "@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/12895086"
        }
      ]
    }
  ]
} as any);
