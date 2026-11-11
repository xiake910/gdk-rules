// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdhs.easy.high.road',
  name: 'e高速',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: 'com.sdhs.easy.main.activity.MainActivity',
          matches:
            '@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^="dislike"] -2 FrameLayout >3 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13670340',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.sdhs.easy.main.activity.MainActivity',
          matches: [
            '[desc^="logoad"]',
            '[desc^="dislike"] > View[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13670340',
        },
      ],
      enable: true,
    },
  ],
} as any);
