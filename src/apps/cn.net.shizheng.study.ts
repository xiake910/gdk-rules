// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.net.shizheng.study',
  name: '365时政',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.dingwei.cloud_classroom.MainActivity',
          matches:
            'View[childCount=2] > ImageView[id=""] + Button[id=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12708731',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-首页广告弹窗',
      fastQuery: true,
      activityIds: 'cn.dingwei.cloud_classroom.MainActivity',
      rules:
        '@Button - ImageView < View < View < View < View < FrameLayout < FrameLayout < FrameLayout < FrameLayout[id="android:id/content"]',
      snapshotUrls: 'https://i.gkd.li/import/12708731',
      enable: true,
    },
  ],
} as any);
