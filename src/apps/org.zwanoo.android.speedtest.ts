// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.zwanoo.android.speedtest',
  name: 'SpeedTest',
  groups: [
    {
      key: 1,
      name: '局部广告-测速后广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.ookla.mobile4.screens.main.MainViewActivity',
          matches: '[vid="suite_completed_close_ad_button"]',
          snapshotUrls: 'https://i.gkd.li/i/12893175',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-测速后广告',
      rules: [
        {
          key: 1,
          activityIds: 'com.ookla.mobile4.screens.main.MainViewActivity',
          fastQuery: true,
          matches:
            '[id="org.zwanoo.android.speedtest:id/suite_completed_close_ad_button"]',
          snapshotUrls: 'https://i.gkd.li/import/12893175',
        },
      ],
      enable: true,
    },
  ],
} as any);
