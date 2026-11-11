// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mszmapp.detective',
  name: '百变大侦探',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.home.HomeActivity',
          matches: '[vid="rvActivityPopups"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/31164272',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '全屏广告-签到弹窗',
      desc: '按[返回键]',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds: '.module.home.HomeActivity',
          matches:
            '[vid="vpFragments"] >3 [vid="ivAdCover"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31215860',
          exampleUrls: 'https://e.gkd.li/e07ecaa8-d175-418d-963a-c4796bb7ab81',
        },
      ],
      enable: true,
    },
  ],
} as any);
