// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xtuone.android.syllabus',
  name: '超级课程表',
  groups: [
    {
      key: 1,
      name: '局部广告-首页卡片广告',
      rules: [
        {
          activityIds: 'com.xtuone.android.friday.MainFragmentActivity',
          matches: '[vid="treehole_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12840733',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '局部广告-课程表界面广告',
      rules: [
        {
          activityIds: 'com.xtuone.android.friday.MainFragmentActivity',
          matches: '[vid="imgv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12999642',
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
          activityIds: 'com.xtuone.android.friday.MainFragmentActivity',
          matches: '[vid="dialog_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13166501',
        },
      ],
      enable: true,
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xtuone.android.friday.UpdateActivity',
          matches: '@[vid="update_cancel"] + [vid="go_to_update"]',
          snapshotUrls: 'https://i.gkd.li/i/14292875',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-首页banner广告',
      activityIds: ['com.xtuone.android.friday.MainFragmentActivity'],
      rules: '[id="com.xtuone.android.syllabus:id/treehole_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12840733',
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-课程表界面广告',
      activityIds: ['com.xtuone.android.friday.MainFragmentActivity'],
      rules: '[id="com.xtuone.android.syllabus:id/imgv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12999642',
      enable: true,
    },
  ],
} as any);
