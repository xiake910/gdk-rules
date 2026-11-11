// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.lite',
  name: '喜马拉雅极速版',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image < View + View + View > View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13218286',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '全屏广告-小说推荐弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[vid="main_iv_novel_back"]',
          snapshotUrls: 'https://i.gkd.li/i/13229127',
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '全屏广告-支付宝提现弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[vid="main_login_guide_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13256447',
        },
      ],
      enable: true,
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.ximalaya.ting.android.host.activity.WelComeActivity',
          matches: '[text="立即开启"] + [vid="host_dialog_cancel_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13256505',
        },
      ],
      enable: false,
    },
    {
      key: 0,
      name: '局部广告-首页-推荐-卡片广告',
      fastQuery: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.lite:id/main_ad_top_home_iv_close"]',
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image < View + View + View > View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13218286',
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-支付宝提现广告弹窗',
      desc: '点击右上角圆形x',
      fastQuery: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.lite:id/main_login_guide_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13256447',
      enable: true,
    },
    {
      key: 3002,
      name: '全屏广告-关闭开启通知弹窗',
      fastQuery: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.WelComeActivity',
      rules:
        '[text="立即开启"] + [id="com.ximalaya.ting.lite:id/host_dialog_cancel_iv"]',
      snapshotUrls: 'https://i.gkd.li/import/13256505',
      enable: true,
    },
  ],
} as any);
