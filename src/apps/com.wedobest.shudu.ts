// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wedobest.shudu',
  name: '数独',
  groups: [
    {
      key: 1,
      name: '局部广告',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.GameAct',
          matches:
            '@Button[clickable=true] +2 [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24967577',
        },
      ],
      enable: true,
    },
  ],
} as any);
