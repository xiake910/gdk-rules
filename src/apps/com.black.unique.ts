// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.black.unique',
  name: '全球购骑士特权',
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
          activityIds: '.feature.home.HomeActivity',
          matches: '@ImageView[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13499502',
        },
      ],
      enable: true,
    },
  ],
} as any);
