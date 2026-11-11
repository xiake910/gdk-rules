// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wan.tools',
  name: '下载工具箱',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.one.downloadtools.ui.activity.HomeActivity',
          matches:
            'LinearLayout[childCount=2] > @[text="取消"] + [text="确认"]',
          snapshotUrls: 'https://i.gkd.li/i/13392027',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '功能类-自动识别解析链接',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.one.downloadtools.ui.activity.HomeActivity',
          matches: '[text="识别解析"]',
          snapshotUrls: 'https://i.gkd.li/i/13392085',
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '全屏广告-开通会员弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.one.downloadtools.ui.activity.HomeActivity',
          matches: ['[text^="开通会员"]', '[text="暂不"]'],
          snapshotUrls: 'https://i.gkd.li/i/13392112',
        },
      ],
      enable: true,
    },
    {
      enable: true,
      key: 3000,
      name: '全屏广告-公告弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: 'LinearLayout[childCount=2] > @[text="取消"] + [text="确认"]',
      snapshotUrls: 'https://i.gkd.li/import/13392027',
    },
  ],
} as any);
