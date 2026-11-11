// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.account',
  name: '小米账号',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: 'com.xiaomi.account.upgrade.AccountApkUpdateDialogActivity',
      rules: '@[text="以后再说"] + [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/12781280',
      enable: false,
    },
  ],
} as any);
