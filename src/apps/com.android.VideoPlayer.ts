// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.VideoPlayer',
  name: 'i 视频',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="child_mode_cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13849807',
      enable: false,
    },
  ],
} as any);
