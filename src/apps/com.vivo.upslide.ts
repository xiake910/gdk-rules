// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.upslide',
  name: '交互池',
  groups: [
    {
      key: 1,
      name: '功能类-交互池-微信扫码',
      desc: '快速微信扫码',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bbk.launcher2.Launcher',
          matches: '@[clickable=true] [text="扫一扫"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/1a1e58f0-7251-4359-8a2b-c7f4562a0f9f',
          snapshotUrls: 'https://i.gkd.li/i/25832521',
        },
      ],
      enable: false,
    },
  ],
} as any);
