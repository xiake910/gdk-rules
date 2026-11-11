// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mkey',
  name: '网易将军令',
  groups: [
    {
      key: 2,
      name: '其他-一键迁移至新版将军令',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.NtSecActivity',
          matches: '[vid="tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13421302',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-一键迁移至新版将军令',
      matchTime: 10000,
      fastQuery: true,
      activityIds: 'com.netease.mkey.activity.NtSecActivity',
      rules: '[id="com.netease.mkey:id/tv_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13421302',
      enable: true,
    },
  ],
} as any);
