// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.livelab',
  name: '纷玩岛',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@Button[clickable=true][childCount=0][visibleToUser=true] <2 View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13258873',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      activityIds: 'cn.com.livelab.MainActivity',
      rules:
        '@Button - ImageView < View < View < View < View < FrameLayout < FrameLayout < FrameLayout[id="android:id/content"]',
      snapshotUrls: 'https://i.gkd.li/import/13258873',
      enable: true,
    },
  ],
} as any);
