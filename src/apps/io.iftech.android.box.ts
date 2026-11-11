// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.iftech.android.box',
  name: '小组件盒子',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +(n) View >(2) TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12706209',
        },
        {
          key: 1,
          activityIds: '.main.HomeActivity',
          matches: 'ImageView - FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12706209',
        },
        {
          key: 2,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://i.gkd.li/i/12706228',
        },
        {
          key: 3,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12706236',
        },
        {
          key: 4,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12706240',
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '全屏广告-会员限时优惠弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.HomeActivity',
          matches: '@[vid="ivClose"] + [text^="限时"][text$="特惠"]',
          snapshotUrls: 'https://i.gkd.li/i/12706226',
        },
      ],
      enable: true,
    },
    {
      key: 1,
      name: '更新提示',
      activityIds: 'io.iftech.android.box.main.HomeActivity',
      rules: '[text*="新版本"] +(2) [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/12706195',
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-第三方 SDK 广告',
      rules: [
        {
          name: '穿山甲',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +(n) View >(2) TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12706209',
        },
        {
          name: '优量汇',
          activityIds: 'io.iftech.android.box.main.HomeActivity',
          matches: 'ImageView - FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12706209',
        },
        {
          name: '百青藤',
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches:
            '[id="io.iftech.android.box:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://i.gkd.li/import/12706228',
        },
        {
          name: '百青藤2',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12706236',
        },
        {
          name: '百青藤3',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12706240',
        },
      ],
      enable: true,
    },
  ],
} as any);
