// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smk',
  name: '杭州市民卡',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.activity.MainActivity',
            '.activity.LaunchActivity',
            'com.tianmu.biz.activity.InterstitialActivity',
          ],
          matches:
            '[vid="iv_close_ad" || vid="tianmu_widget_iv_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13402584',
            'https://i.gkd.li/i/13425013',
            'https://i.gkd.li/i/23567834',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.smk.activity.MainActivity',
        'com.smk.activity.LaunchActivity',
      ],
      rules: '[id="com.smk:id/iv_close_ad"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13402584',
        'https://i.gkd.li/import/13425013',
      ],
      enable: true,
    },
  ],
} as any);
