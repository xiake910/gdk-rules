// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.thestore.main',
  name: '1号会员店',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '关闭弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.home.HomeActivity',
          matches:
            '@TextView[clickable=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout < [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/13163686',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      enable: true,
      name: '全屏广告-促销广告',
      desc: '关闭促销弹窗，也许有用呢',
      activityIds: 'com.thestore.main.app.home.HomeActivity',
      rules: [
        {
          matches: '[id="com.thestore.main.home.feature:id/ad"] > TextView',
          snapshotUrls: 'https://i.gkd.li/import/13163686',
        },
      ],
    },
  ],
} as any);
