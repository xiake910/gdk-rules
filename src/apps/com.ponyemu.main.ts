// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ponyemu.main',
  name: '小马模拟器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ponyemu.main.activitys.AdLaunchActivity',
          matches: 'TextView[text*="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/14892481',
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
