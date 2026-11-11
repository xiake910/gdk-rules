// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.cleanmaster',
  name: '垃圾清理',
  groups: [
    {
      key: 1,
      name: '全屏广告-添加桌面图标提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.miui.optimizecenter.MainActivity',
          matches: [
            '[text^="开启桌面图标"]',
            '[text="不需要"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/30698886',
        },
      ],
      enable: true,
    },
  ],
} as any);
