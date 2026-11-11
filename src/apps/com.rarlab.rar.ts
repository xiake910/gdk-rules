// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rarlab.rar',
  name: 'RAR',
  groups: [
    {
      key: 10,
      name: '全屏广告-订购 RAR 弹窗',
      desc: '点击[放弃]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '[text="订购" || text="訂閱"] + [text="放弃" || text="解除"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12781596',
            'https://i.gkd.li/i/15801328',
          ],
        },
      ],
      enable: true,
    },
  ],
} as any);
