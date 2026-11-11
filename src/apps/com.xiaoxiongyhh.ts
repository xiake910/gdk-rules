// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaoxiongyhh',
  name: '小熊有好货',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: 'com.uzmap.pkg.EntranceActivity',
          matches:
            'View[childCount=2] > ImageView + Button[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13401975',
        },
      ],
      enable: true,
    },
  ],
} as any);
