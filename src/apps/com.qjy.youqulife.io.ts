// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qjy.youqulife.io',
  name: 'MINO 4K',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '快手广告',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: ['[text="广告"] ', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13378653',
        },
      ],
      enable: true,
    },
  ],
} as any);
