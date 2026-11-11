// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lingan.seeyou',
  name: '美柚',
  groups: [
    {
      key: 1,
      name: '局部广告-评论区上方卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.community.topicdetail.TopicDetailActivity',
          matches: '[vid="v_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14034770',
        },
      ],
      enable: true,
    },
  ],
} as any);
