// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.x.istar',
  name: '观星',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches: '[text="关闭广告"][vid="btn_negative"]',
          snapshotUrls: 'https://i.gkd.li/i/13974606',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-开屏广告弹窗',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.x.istar.view.main.MainActivity',
      rules: '[text="关闭广告"][vid="btn_negative"]',
      snapshotUrls: 'https://i.gkd.li/import/13974606',
      enable: true,
    },
  ],
} as any);
