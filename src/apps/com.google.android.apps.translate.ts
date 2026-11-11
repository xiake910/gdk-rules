// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.translate',
  name: 'Google翻译',
  groups: [
    {
      key: 4,
      name: '功能类-关闭登录备份翻译记录弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.TranslateActivity',
          matches: ['[text="备份您的翻译历史记录"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13495796',
        },
      ],
      enable: false,
    },
    {
      enable: true,
      key: 3000,
      name: '全屏广告-登录弹窗',
      desc: '登录备份翻译记录',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.google.android.apps.translate.TranslateActivity',
      rules:
        'Button[id="com.google.android.apps.translate:id/sign_in_button"] + [id="com.google.android.apps.translate:id/secondary_action_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13495796',
    },
  ],
} as any);
