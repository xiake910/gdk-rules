// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.icredit',
  name: '企查查',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.MainMenuActivity',
          matches:
            '@Image[childCount=0][visibleToUser=true] <2 View < View < WebView[text$="限时返场" || text="首单有礼"] < WebView < LinearLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/eb232325-12e4-495f-a9f3-5f853d5e66f9',
          snapshotUrls: [
            'https://i.gkd.li/i/14720494',
            'https://i.gkd.li/i/15112280',
          ],
        },
      ],
      enable: true,
    },
  ],
} as any);
