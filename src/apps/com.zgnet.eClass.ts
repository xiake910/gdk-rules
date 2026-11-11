// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: 'TextView[id$="tv_close_time"&&text^="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12644260',
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 2,
      name: '功能类-退出确认弹窗',
      rules: [
        {
          matches:
            '[text*="确定要退出"] < LinearLayout +n LinearLayout > TextView[id$="tv_exit_sure"]',
          snapshotUrls: 'https://i.gkd.li/i/12645513',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      enable: true,
      name: '全屏广告-退出确认弹窗（默认关闭）',
      rules: [
        {
          matches:
            '[text*="确定要退出"] < LinearLayout +n LinearLayout > TextView[id$="tv_exit_sure"]',
          snapshotUrls: ['https://i.gkd.li/import/12645513'],
        },
      ],
    },
  ],
} as any);
