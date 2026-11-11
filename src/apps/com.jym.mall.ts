// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jym.mall',
  name: '交易猫',
  groups: [
    {
      key: 0,
      name: '全屏广告-升级弹窗',
      rules: '[id="com.jym.mall:id/tv_cancel"][text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/12496974',
      enable: true,
    },
  ],
} as any);
