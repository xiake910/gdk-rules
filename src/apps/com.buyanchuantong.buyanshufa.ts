// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.buyanchuantong.buyanshufa',
  name: '不厌书法',
  groups: [
    {
      key: 3,
      name: '功能类-功能介绍',
      desc: '点击跳过',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.SplashActivity',
          matches: '[text^="点击跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13425296',
        },
      ],
      enable: false,
    },
    {
      enable: true,
      key: 3000,
      name: '全屏广告-功能介绍',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.buyanchuantong.buyanshufa.SplashActivity',
      rules: [
        {
          matches:
            '[id="com.buyanchuantong.buyanshufa:id/next_page_imageview"][text^="点击跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13425296',
        },
      ],
    },
  ],
} as any);
