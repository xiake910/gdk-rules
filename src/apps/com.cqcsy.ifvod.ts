// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cqcsy.ifvod',
  name: '爱壹帆',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '@[text="以后再说"] +2 [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13798537',
      enable: false,
    },
  ],
} as any);
