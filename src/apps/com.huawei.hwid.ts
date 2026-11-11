// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
            'com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity',
          ],
          matches:
            '@[id*="interstitial_close"][clickable=true] +n * >n [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12709068',
            'https://i.gkd.li/i/24675884',
            'https://i.gkd.li/i/24979139',
          ],
        },
        {
          key: 1,
          activityIds: 'com.huawei.hms.runtimekit.stub.',
          matches: '[id="com.huawei.hms.game:id/close_image"]',
          snapshotUrls: 'https://i.gkd.li/i/34187296',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-页面中间跳出广告',
      activityIds: [
        'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.hwid:id/interstitial_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12709068'],
        },
      ],
      enable: true,
    },
  ],
} as any);
