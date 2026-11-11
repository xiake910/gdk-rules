// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ddyc.lotterytool',
  name: '彩虹多多',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            '@ImageButton[clickable=true][childCount=0] < LinearLayout < FrameLayout < [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/13324555',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text^="开启推送通知"] +2 LinearLayout [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13325888',
        },
      ],
      enable: false,
    },
    {
      enable: true,
      key: 3000,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ddyc.lotterytool.module.main.MainActivity',
      rules:
        'ImageView - ImageButton[id="com.ddyc.lotterytool:id/arg"][text=null]',
      snapshotUrls: 'https://i.gkd.li/import/13324555',
    },
    {
      enable: false,
      key: 3001,
      name: '权限提示-请求推送通知弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="开启推送通知"] +2 LinearLayout [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13325888',
    },
  ],
} as any);
