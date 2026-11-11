// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xuexi.android',
  name: '学习强国',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
          matches: '@[text="取消"] + [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/12715139',
        },
      ],
      enable: false,
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
          matches: '[text^="开启消息通知"] +2 [vid="layout_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12715160',
        },
      ],
      enable: false,
    },
    {
      enable: false,
      key: 3000,
      name: '通知提示-请求开启通知权限提示信息',
      desc: '[x]',
      fastQuery: true,
      activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
      rules: [
        {
          matches:
            '@FrameLayout[id="cn.xuexi.android:id/layout_close"] -2 [text="开启消息通知，不错过重要新消息"]',
          snapshotUrls: 'https://i.gkd.li/import/12715160',
        },
      ],
    },
  ],
} as any);
