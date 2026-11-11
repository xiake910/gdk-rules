// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wsds.gamemaster',
  name: '迅游手游加速器',
  groups: [
    {
      key: 2,
      name: '分段广告-卡片广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.ui.gamedetails.ActivityGameDetails',
          matches:
            'ViewGroup[childCount=2] > @ImageView[childCount=0][index=1][clickable=true][visibleToUser=true] - [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/13930398',
        },
        {
          preKeys: [0],
          activityIds: '.ui.gamedetails.ActivityGameDetails',
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13930399',
        },
      ],
      enable: true,
    },
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="splash_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13930391',
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
