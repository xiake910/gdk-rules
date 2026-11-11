// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.onelap.bls.dear',
  name: '顽鹿运动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '延迟1s点击跳过,避免太早点击被误判异常互动而锁满 5s',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: '[vid="ll_skip_advertisement_splash"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/34618778'],
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
