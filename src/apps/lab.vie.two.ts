// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'lab.vie.two',
  name: 'LIBVIO',
  groups: [
    {
      key: 1,
      name: '其他-账号注册说明弹窗',
      desc: '每次打开app的弹窗提示，自动点击"我知道了"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[desc="账号注册说明"] +2 [desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/13379070',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-账号注册说明弹窗',
      desc: '每次打开app的弹窗提示，本规则自动点击【我知道了】',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="账号注册说明"] +2 [desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13379070',
      enable: true,
    },
  ],
} as any);
