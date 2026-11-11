// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ideal.flyerteacafes',
  name: '飞客',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            '.ui.HomeActivity',
            '.ui.activity.thread.NormalThreadActivity',
          ],
          matches:
            '@[vid="close" || vid="iv_close"] - FrameLayout > [vid="iv_adv_tip"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13466119',
            'https://i.gkd.li/i/27550981',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 4,
      name: '局部广告-信息流广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.thread.NormalThreadActivity',
          matches:
            '@TextView[visibleToUser=true] <3 View < [id=null][childCount=3] <n View[childCount>10] <6 [id="comment-list"] <n View[childCount>10] < WebView < WebView < [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/27529035',
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
      activityIds: 'com.ideal.flyerteacafes.ui.HomeActivity',
      rules:
        '@[id="com.ideal.flyerteacafes:id/close"] - FrameLayout > [id="com.ideal.flyerteacafes:id/tv_time_down"]',
      snapshotUrls: 'https://i.gkd.li/import/13466119',
      enable: true,
    },
  ],
} as any);
