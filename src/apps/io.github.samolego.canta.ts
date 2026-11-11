// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.github.samolego.canta',
  name: 'Canta',
  groups: [
    {
      key: 1,
      name: '其他-卸载应用后弹窗',
      desc: '点击[取消]',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '[text="取消"] < @[clickable=true] -2 [text^="您已成功卸载"]',
          snapshotUrls: 'https://i.gkd.li/i/28225422',
        },
      ],
      enable: false,
    },
  ],
} as any);
