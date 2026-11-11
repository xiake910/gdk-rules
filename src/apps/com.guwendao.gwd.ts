// 自动生成, 请勿手改（默认只启用「开屏广告」类规则组，其余默认关闭；规则来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.guwendao.gwd",
  "name": "古文岛",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "key": 2,
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "snapshotUrls": "https://i.gkd.li/i/12781344"
        },
        {
          "key": 3,
          "fastQuery": true,
          "activityIds": [
            ".MainActivity",
            "com.android.systemui.media.MediaProjectionPermissionActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12776607",
            "https://i.gkd.li/i/12777151",
            "https://i.gkd.li/i/12924728"
          ]
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 10,
          "matches": "@Image[id=null] < View + View + TextView[text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/12781327"
        }
      ],
      "enable": false
    },
    {
      "key": 1,
      "name": "全屏广告-更新弹窗",
      "activityIds": "com.guwendao.gwd.MainActivity",
      "rules": "[text=\"应用升级提醒\"] +n LinearLayout > [text=\"取消\"]",
      "snapshotUrls": "https://i.gkd.li/import/12776605",
      "enable": false
    },
    {
      "key": 3000,
      "name": "全屏广告-第三方 SDK 广告弹窗",
      "activityIds": "com.guwendao.gwd.MainActivity",
      "rules": [
        {
          "key": 0,
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/import/12776607"
        },
        {
          "activityIds": "com.android.systemui.media.MediaProjectionPermissionActivity",
          "key": 1,
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/import/12777151"
        },
        {
          "key": 2,
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after\"]",
          "snapshotUrls": "https://i.gkd.li/import/12781344"
        },
        {
          "key": 3,
          "matches": "ImageView < FrameLayout + FrameLayout > FrameLayout > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/import/12924728"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 10,
          "matches": "@Image[id=null] < View + View + TextView[text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/import/12781327"
        }
      ],
      "enable": false
    }
  ]
} as any);
