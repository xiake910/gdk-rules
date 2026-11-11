// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.phoneservice',
  name: '我的荣耀',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="ads_cancel"]',
          exampleUrls: 'https://e.gkd.li/539acb69-5c9c-4c4b-9757-d189b6852f89',
          snapshotUrls: 'https://i.gkd.li/i/16476928',
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '权限提示-定位权限',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: '[text^="开启定位权限"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12783134',
        },
      ],
      enable: false,
    },
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.hihonor.phoneservice.OpenScreenAdActivity',
          matches:
            'TextView[id="com.hihonor.phoneservice:id/start_skip_count_down"]',
          snapshotUrls: 'https://i.gkd.li/import/14896804',
        },
      ],
      order: -10,
      enable: true,
    },
    {
      enable: true,
      key: 3000,
      name: '全屏广告-请求位置权限提示信息',
      activityIds: 'com.hihonor.phoneservice.main.MainActivity',
      rules:
        '[text^="开启定位权限"] + [id="com.hihonor.phoneservice:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12783134',
    },
  ],
} as any);
