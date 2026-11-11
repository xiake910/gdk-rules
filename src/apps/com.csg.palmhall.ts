// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csg.palmhall',
  name: '南网在线',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '@[text="关闭"] + [text="升级"]',
          snapshotUrls: 'https://i.gkd.li/i/12700060',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: 'View > Image +(3) [text="不再显示"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12700075',
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '通知提示-公告弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '[text$="公告"] - View[childCount=2] > Image[childCount=0][text=""]',
          exampleUrls: 'https://e.gkd.li/0ecc2a4e-6ab9-4c00-80fe-bbd23d181be8',
          snapshotUrls: 'https://i.gkd.li/i/16478559',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-首页广告弹窗',
      activityIds: ['com.csg.palmhall.MainActivity'],
      rules: 'View > Image +(3) [text="不再显示"][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12700075'],
      enable: true,
    },
  ],
} as any);
