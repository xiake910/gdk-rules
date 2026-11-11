// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.didi.live.spring',
  name: '小红帽',
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
          activityIds:
            'com.qennnsad.aknkaksd.presentation.ui.MainContainerActivity',
          matches: '[vid="dialog_hall_iv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0d0a2a0a-b9de-4f30-9e25-a0e3b3c111d6',
          snapshotUrls: 'https://i.gkd.li/i/14341955',
        },
      ],
      enable: true,
    },
  ],
} as any);
