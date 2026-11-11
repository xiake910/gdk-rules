// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sohu.sohuvideo',
  name: '搜狐视频',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.homepage.MainActivity',
          matches: '@[vid="ivClose"] + LinearLayout [text="新版本上线啦"]',
          snapshotUrls: 'https://i.gkd.li/i/13435504',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '青少年模式',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sohu.sohuvideo.ui.homepage.MainActivity',
      rules:
        '@[id="com.sohu.sohuvideo:id/tv_ok"] -2 LinearLayout > [text="设置青少年模式"]',
      snapshotUrls: 'https://i.gkd.li/import/13448876',
      enable: false,
    },
  ],
} as any);
