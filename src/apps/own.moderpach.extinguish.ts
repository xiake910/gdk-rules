// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'own.moderpach.extinguish',
  name: 'Extinguish',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击[启动]',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches: 'Button - [text="启动"] < [clickable=true]',
          exampleUrls: 'https://e.gkd.li/b3054290-5f5e-4a12-ad60-e3b455c0425c',
          snapshotUrls: 'https://i.gkd.li/i/25821346',
        },
      ],
      enable: false,
    },
  ],
} as any);
