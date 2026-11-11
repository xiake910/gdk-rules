// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.quicksearchbox',
  name: '搜索',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.SearchActivityTransparent',
          matches: '[vid="ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13897834',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-广告卡片',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="ad_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13897834',
      enable: true,
    },
  ],
} as any);
