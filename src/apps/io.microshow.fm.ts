// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.microshow.fm',
  name: '畅听FM',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches:
            '@Button[childCount=0][clickable=true][visibleToUser=true] <2 FrameLayout < RelativeLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14953007',
        },
      ],
      enable: true,
    },
  ],
} as any);
