// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gvsoft.gofun',
  name: 'GoFun出行',
  groups: [
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.module.home.activity.HomeActivity',
          matches: '[vid="cardView"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13497777',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-广告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.gvsoft.gofun.module.home.activity.HomeActivity',
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[id="com.gvsoft.gofun:id/cardView"] + [id="com.gvsoft.gofun:id/iv_close"]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/13497777',
      enable: true,
    },
  ],
} as any);
