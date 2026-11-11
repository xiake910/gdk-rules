// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.le123.ysdq',
  name: '影视大全',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.elinkway.infinitemovies.ui.activity.NewMainActivity',
          matches: '[vid="ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13635244',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.elinkway.infinitemovies.ui.activity.NewMainActivity',
          fastQuery: true,
          matches: '[id="com.le123.ysdq:id/ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/import/13635244',
        },
      ],
      enable: true,
    },
  ],
} as any);
