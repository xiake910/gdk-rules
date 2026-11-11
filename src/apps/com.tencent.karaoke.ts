// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.karaoke',
  name: '全民K歌',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '动态页面-卡片广告',
          fastQuery: true,
          activityIds: '.module.main.ui.MainTabActivity',
          matches: '@ImageView[clickable=true] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13334798',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '活动弹窗',
          activityIds: '.module.splash.ui.SplashBaseActivity',
          matches:
            'ViewGroup[childCount=0] < @ViewGroup[clickable=true][childCount=1] - ViewGroup > [desc*="双十一"]',
          snapshotUrls: 'https://i.gkd.li/i/13363281',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '动态页面-卡片式广告',
          activityIds: 'com.tencent.karaoke.module.main.ui.MainTabActivity',
          matches: 'RelativeLayout > [text="广告"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13334798',
        },
      ],
      enable: true,
    },
  ],
} as any);
