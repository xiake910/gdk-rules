// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  groups: [
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MonitorActivity',
          matches: ['[text="发现新版本"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13608563',
        },
      ],
      enable: false,
    },
    {
      key: 0,
      name: '开屏广告',
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          fastQuery: true,
          name: '全局规则-1',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13987038',
        },
        {
          key: 1,
          name: '字节广告SDK',
          matches:
            'TextView - @View[clickable=true] <n FrameLayout <2 FrameLayout[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/import/13978978',
        },
        {
          key: 2,
          name: '全局规则-2',
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
