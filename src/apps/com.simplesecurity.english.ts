// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.simplesecurity.english',
  name: '水果派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matchDelay: 3000,
          matches: '[text="关闭广告"]',
          exampleUrls: 'https://e.gkd.li/8718ddc4-8775-482e-a259-bc43c7171fd8',
          snapshotUrls: 'https://i.gkd.li/i/13447714',
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
