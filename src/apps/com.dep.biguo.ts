// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dep.biguo',
  name: '自考笔果题库',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.dialog',
          matches: '@[text="取消"] +2 [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/12708751',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.dialog',
          matches: '[vid="imageView"] + [vid="closeView"]',
          snapshotUrls: 'https://i.gkd.li/i/12708756',
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '权限提示-定位权限',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.mvp.ui.activity.MainActivity',
          matches: '[text*="定位权限"] +2 [text="拒绝"]',
          snapshotUrls: 'https://i.gkd.li/i/12708770',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-首页广告弹窗',
      activityIds: 'com.dep.biguo.dialog',
      rules:
        '[id="com.dep.biguo:id/imageView"] + [id="com.dep.biguo:id/closeView"]',
      snapshotUrls: 'https://i.gkd.li/import/12708756',
      enable: true,
    },
    {
      enable: false,
      key: 3001,
      name: '权限提示-请求定位权限弹窗',
      activityIds: 'com.dep.biguo.mvp.ui.activity.MainActivity',
      rules: '[text*="定位权限"] +2 [text="拒绝"]',
      snapshotUrls: 'https://i.gkd.li/import/12708770',
    },
  ],
} as any);
