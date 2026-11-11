// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.uzero.baimiao',
  name: '白描',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击截取全屏',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.screen.ScreenCaptureActivity',
          matches: '[text="截取全屏"]',
          snapshotUrls: 'https://i.gkd.li/i/23054772',
        },
      ],
      enable: false,
    },
  ],
} as any);
