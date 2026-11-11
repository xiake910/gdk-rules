// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.com.gamer.android.animad',
  name: '動畫瘋',
  groups: [
    {
      key: 1,
      name: '其他-动画疯年龄限制',
      desc: '点击同意',
      rules: [
        {
          fastQuery: true,
          activityIds: '.VideoActivity',
          matches: '[vid="agree_button"][text="同意"]',
          snapshotUrls: 'https://i.gkd.li/i/13808757',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '功能类-动画疯年龄限制',
      desc: '点击同意',
      activityIds: 'tw.com.gamer.android.animad.VideoActivity',
      fastQuery: true,
      rules: [
        {
          matches:
            '[id="tw.com.gamer.android.animad:id/agree_button"][text="同意"]',
          snapshotUrls: 'https://i.gkd.li/import/13808757',
        },
      ],
      enable: false,
    },
  ],
} as any);
