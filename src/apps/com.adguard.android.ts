// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.adguard.android',
  name: 'AdGuard',
  groups: [
    {
      key: 1,
      name: '功能类-自动开启保护',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.adguard.android:id/main_switch"][text="主保护开关已关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/16346724',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20513646',
        },
      ],
      enable: false,
    },
  ],
} as any);
