// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dsm.secondlock',
  name: '德施曼智能',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.main.MainActivity',
            'com.dsm.message.activity.MessageActivity',
          ],
          matches: '[vid="ivCancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/29934451',
            'https://i.gkd.li/i/29934452',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="ivCloseBanner"]',
          snapshotUrls: 'https://i.gkd.li/i/29934453',
        },
      ],
      enable: true,
    },
  ],
} as any);
