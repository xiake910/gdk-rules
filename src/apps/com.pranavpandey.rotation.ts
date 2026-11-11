// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pranavpandey.rotation',
  name: 'Rotation',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: '[desc="Interstitial close button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23497601',
        },
      ],
      enable: true,
    },
  ],
} as any);
