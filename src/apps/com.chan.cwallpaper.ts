// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chan.cwallpaper',
  name: '图凌',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="activate_button"]',
          snapshotUrls: 'https://i.gkd.li/i/14293734',
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 1,
      name: '全屏广告-会员回馈弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.module.main.MainActivity',
          matches: '[vid="ivClose"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8150c450-bcf8-4e8b-8236-4c3abebbeef3',
          snapshotUrls: 'https://i.gkd.li/i/14308433',
        },
      ],
      enable: true,
    },
  ],
} as any);
