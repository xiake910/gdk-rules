// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.attempt.afusekt',
  name: 'AfuseKt',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[text="下次一定"]',
          exampleUrls: 'https://e.gkd.li/7c513592-123b-4dde-92cd-54fad5d14dee',
          snapshotUrls: 'https://i.gkd.li/i/16938883',
        },
      ],
      enable: false,
    },
  ],
} as any);
