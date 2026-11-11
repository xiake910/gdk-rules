// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: '@View[clickable=true] <n * <2 * < [vid="flCSJAdContainer"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13988957',
            'https://i.gkd.li/import/13989178',
          ],
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
