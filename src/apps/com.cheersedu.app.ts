// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cheersedu.app',
  name: '湛庐阅读',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: '[vid="iv_version_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13315712',
        },
      ],
      enable: false,
    },
  ],
} as any);
