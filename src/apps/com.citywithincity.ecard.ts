// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citywithincity.ecard',
  name: 'e通卡',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          activityIds: '.EntryActivity',
          matches:
            '@ImageView[visibleToUser=true][width<119 && height<119] < [childCount=1] <2 ViewGroup < ViewGroup <2 [childCount=2] < ViewGroup < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28448307',
        },
      ],
      enable: true,
    },
  ],
} as any);
