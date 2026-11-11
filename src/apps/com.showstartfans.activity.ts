// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.showstartfans.activity',
  name: '秀动',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activitys.maintab.newmain.MainNewActivity',
          matches: '[vid="img_close_coupon"]',
          snapshotUrls: 'https://i.gkd.li/i/13670432',
        },
      ],
      enable: true,
    },
  ],
} as any);
