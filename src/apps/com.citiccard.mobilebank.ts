// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="btn_skip"]',
          snapshotUrls: 'https://i.gkd.li/i/12684908',
        },
        {
          key: 1,
          matches: '[vid="jump"]',
          snapshotUrls: 'https://i.gkd.li/i/13049013',
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          activityIds: '.card.activity.BillDetailHomeActivity',
          matches: '[vid="iv_bill_home_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13049284',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[vid="ll_app_upgrade_content"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13049283',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-广告弹窗',
      activityIds: [
        'com.citiccard.mobilebank.card.activity.BillDetailHomeActivity',
      ],
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.citiccard.mobilebank:id/iv_bill_home_cancel"]',
          snapshotUrls: ['https://i.gkd.li/import/13049284'],
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '权限提示',
      activityIds: [
        'com.citiccard.mobilebank.card.activity.BillDetailHomeActivity',
      ],
      fastQuery: true,
      rules: [
        {
          matches:
            '[id="com.citiccard.mobilebank:id/ll_app_upgrade_content"] + [id="com.citiccard.mobilebank:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/import/13049283'],
        },
      ],
      enable: false,
    },
  ],
} as any);
