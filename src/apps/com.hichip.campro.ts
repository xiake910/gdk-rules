// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hichip.campro',
  name: 'CamHipro',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'main.MainActivity',
          matches: '[vid="iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/15847732',
        },
      ],
      enable: true,
    },
  ],
} as any);
