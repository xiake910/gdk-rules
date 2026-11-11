// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.ccspeed',
  name: 'CC加速器',
  groups: [
    {
      key: 1,
      name: '局部广告-加速页分享抽奖浮窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.MainActivity',
          matches: '@ImageView[visibleToUser=true] + [vid="iv_float"]',
          snapshotUrls: 'https://i.gkd.li/i/13539299',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      enable: true,
      name: '全屏广告-加速页-分享抽奖浮窗',
      activityIds: 'cn.ccspeed.app.MainActivity',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'activity',
      actionMaximum: 1,
      rules: [
        {
          matches:
            'ImageView[id="cn.ccspeed:id/iv_float"] - @ImageView < FrameLayout[id="cn.ccspeed:id/float_layout"]',
          snapshotUrls: 'https://i.gkd.li/import/13539299',
        },
      ],
    },
  ],
} as any);
