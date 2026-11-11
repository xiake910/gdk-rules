// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jdlite',
  name: '京喜特价',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainFrameActivity',
          matches: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
          snapshotUrls: 'https://i.gkd.li/i/12727396',
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainFrameActivity',
          matches:
            '@ImageView[clickable=true] - LinearLayout > [text="开启消息通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13062969',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-首页广告弹窗',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
      snapshotUrls: 'https://i.gkd.li/import/12727396',
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-请求通知权限弹窗',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules:
        '@ImageView[clickable=true] - LinearLayout > [text="开启消息通知"]',
      snapshotUrls: 'https://i.gkd.li/import/13062969',
      enable: true,
    },
  ],
} as any);
