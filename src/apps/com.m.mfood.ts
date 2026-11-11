// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.m.mfood',
  name: 'mFood',
  groups: [
    {
      key: 1,
      name: '局部广告-浮窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zdyl.mfood.ui.home.MainActivity',
          matches: '[vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13350787',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-浮窗廣告',
      fastQuery: true,
      activityIds: 'com.zdyl.mfood.ui.home.MainActivity',
      rules: '[id="com.m.mfood:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350787',
      enable: true,
    },
  ],
} as any);
