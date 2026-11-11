// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mm.android.lc',
  name: '乐橙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="advert_countdown_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b30750e1-92ca-452b-8467-a0074989ec92',
          snapshotUrls: 'https://i.gkd.li/i/14586621',
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
