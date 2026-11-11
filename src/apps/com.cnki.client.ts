// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cnki.client',
  name: '手机知网',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.core.tramp.SplashActivity',
          matches: '[vid="update_undo"]',
          snapshotUrls: 'https://i.gkd.li/i/12854857',
        },
      ],
      enable: false,
    },
  ],
} as any);
