// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cs_credit_bank',
  name: '发现精彩',
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
          key: 0,
          matches: '@TextView[text*="跳过"] <3 ViewGroup < [vid="main_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/30388152',
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mapass.example.activity.MainActivity_',
          matches: '@[vid="iv_close"] + [vid="iv_advert"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0d91563d-057b-47d4-9ce5-8e9a5fc2b9c9',
          snapshotUrls: 'https://i.gkd.li/i/23141403',
        },
      ],
      enable: true,
    },
  ],
} as any);
