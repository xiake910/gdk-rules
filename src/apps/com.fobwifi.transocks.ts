// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fobwifi.transocks',
  name: 'Transocks',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗',
      desc: '点击[Finish]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.main.MainActivity',
          matches:
            '@[text="Finish"] +n [visibleToUser=true] >(1,3) [text*="VIP"]',
          snapshotUrls: 'https://i.gkd.li/i/32761426',
          exampleUrls: 'https://e.gkd.li/1c8008a7-bd3b-4c0d-a287-ef9ab4a10fb6',
        },
      ],
      enable: true,
    },
  ],
} as any);
