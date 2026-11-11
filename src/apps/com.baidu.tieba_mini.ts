// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba_mini',
  name: '贴吧极速版',
  groups: [
    {
      key: 1,
      name: '分段广告-首页信息流广告',
      activityIds: ['com.baidu.tieba.tblauncher.MainTabActivity'],
      rules: [
        {
          key: 0,
          matches: 'LinearLayout > [text="广告"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12905039',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="屏蔽广告"]',
          snapshotUrls: ['https://i.gkd.li/i/12904633'],
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-首页-信息流广告',
      activityIds: ['com.baidu.tieba.tblauncher.MainTabActivity'],
      rules: [
        {
          key: 0,
          matches: 'LinearLayout > [text="广告"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12905039',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="屏蔽广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12904633'],
        },
      ],
      enable: true,
    },
  ],
} as any);
