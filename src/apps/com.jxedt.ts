// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jxedt',
  name: '驾校一点通',
  groups: [
    {
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activitys.exercise.OrderExerciseActivity',
          matches: '[vid="img_question_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13195641',
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.ui.activitys.NewHomeActivity',
          matches: '[vid="img_dialog_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13476741',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-广告卡片',
      activityIds: 'com.jxedt.ui.activitys.exercise.OrderExerciseActivity',
      rules: '[id="com.jxedt:id/img_question_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13195641',
      enable: true,
    },
  ],
} as any);
