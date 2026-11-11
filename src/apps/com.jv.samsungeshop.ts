// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jv.samsungeshop',
  name: '三星商城',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[desc="跳过"][desc.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/65cbe48e-843e-4dba-a53b-5f6598a2b409',
          snapshotUrls: 'https://i.gkd.li/i/23288756',
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
