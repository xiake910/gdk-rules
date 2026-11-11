// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pandabus.android.jilinxing',
  name: '吉林行',
  groups: [
    {
      key: 1,
      name: '全屏广告-开屏小窗广告',
      desc: '检测到开屏穿山甲广告自动关闭',
      fastQuery: true,
      activityIds: ['com.pandabus.android.jilinxing.MainActivity'],
      rules: '@[vid="iv_native_dislike"]',
      snapshotUrls: ['https://i.gkd.li/i/29184757'],
      enable: true,
    },
  ],
} as any);
