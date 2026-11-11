// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.diershoubing.erbing',
  name: '二柄',
  groups: [
    {
      key: 6,
      name: '分段广告',
      fastQuery: true,
      activityIds: '.activity.MainReActivity',
      rules: [
        {
          key: 1,
          matches: '[text="广告"]',
          exampleUrls: 'https://e.gkd.li/921d559f-6535-4d54-9bb2-8bbc82a6f2e1',
          snapshotUrls: 'https://i.gkd.li/i/13868396',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@LinearLayout > [text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/e6818e93-3fab-4afa-95b9-0ba38ea7f2db',
          snapshotUrls: 'https://i.gkd.li/i/13868401',
        },
      ],
      enable: true,
    },
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '@[id$="tt_splash_skip_btn"] <<n [vid="containerV"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13378853',
            'https://i.gkd.li/import/13546165',
          ],
        },
        {
          key: 1,
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13538207',
        },
        {
          key: 2,
          matches:
            '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="containerV"]',
          snapshotUrls: 'https://i.gkd.li/import/13857307',
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
