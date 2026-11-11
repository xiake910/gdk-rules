// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bin.mt.plus.canary',
  name: 'MT管理器Pro',
  groups: [
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'bin.mt.plus.Main',
          matches: '@[text="取消"] + [text="更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13561226',
        },
      ],
      enable: false,
    },
  ],
} as any);
