// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oppo.store',
  name: 'OPPO商城',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击下次再说',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '@[text="下次再说"] -3 [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13295202',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: 'ImageView[vid="dialog_delete"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13295201',
        },
      ],
      enable: true,
    },
  ],
} as any);
