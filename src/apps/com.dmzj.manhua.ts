// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dmzj.manhua',
  name: '动漫之家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.LaunchInterceptorActivity',
          matches: '[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13542503',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '局部广告-悬浮广告',
      desc: '点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.home.HomeTabsActivitys',
          matches: '[vid="ivAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13542506',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-主页-浮窗',
      desc: '浮窗-您想运行会员系统吗？',
      activityIds: 'com.dmzj.manhua.ui.home.HomeTabsActivitys',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules:
        '@[id="com.dmzj.manhua:id/ivAdClose"] - [id="com.dmzj.manhua:id/ivFloatAd"]',
      snapshotUrls: 'https://i.gkd.li/import/13542506',
      enable: true,
    },
  ],
} as any);
