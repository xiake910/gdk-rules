// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.hebao',
  name: '和包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.cmcc.wallet.mocam.activity.home.WalletHomeActivity',
          matches:
            '@[clickable=true] > [visibleToUser=true][text="dialog-delete"] <<n [vid="rl_parent"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cb33c5b5-dd2e-4aa9-80d1-f7013f150305',
          snapshotUrls: 'https://i.gkd.li/i/14567338',
        },
      ],
      enable: true,
    },
  ],
} as any);
