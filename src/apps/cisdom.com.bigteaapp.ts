// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cisdom.com.bigteaapp',
  name: '大茶肆',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text$="抽奖送大礼"] < WebView - [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13228579',
        },
      ],
      enable: true,
    },
  ],
} as any);
