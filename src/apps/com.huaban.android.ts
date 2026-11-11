// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huaban.android',
  name: '花瓣',
  groups: [
    {
      key: 1,
      fastQuery: true,
      name: '更新提示-版本更新弹窗',
      desc: '点击不再提示',
      rules: [
        {
          matches: '[vid="tv_update"] + * > [text="不再提示"]',
          snapshotUrls: 'https://i.gkd.li/import/13832253',
        },
      ],
      enable: false,
    },
  ],
} as any);
