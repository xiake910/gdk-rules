// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    {
      key: 1,
      name: '全屏广告-酷我会员日弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activities.MainActivity',
          matches: '[vid="iv_business_personal_dia_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13974483',
        },
      ],
      enable: true,
    },
  ],
} as any);
