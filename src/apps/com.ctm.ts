// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ctm',
  name: 'CTM Buddy',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.home.page.MainActivity',
          matches: '[vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/fbaa53c3-109d-47b3-b85c-373d93e420d9',
          snapshotUrls: 'https://i.gkd.li/i/13350575',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '局部广告-底部横幅广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.home.page.MainActivity',
          matches: '[vid="iv_bottom_adv"] + [vid="btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13350612',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告',
      fastQuery: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350575',
      enable: true,
    },
  ],
} as any);
