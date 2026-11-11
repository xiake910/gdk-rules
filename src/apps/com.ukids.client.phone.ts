// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ukids.client.phone',
  name: '小小优趣',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.parent.ParentClientHomeActivity',
          matches: '[vid="dialog_dismiss_btn_two"]',
          snapshotUrls: 'https://i.gkd.li/i/13400238',
        },
      ],
      enable: true,
    },
  ],
} as any);
