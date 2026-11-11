// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.mico',
  name: '小爱音箱',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: '[vid="adImage"] + [vid="ivCloseAd"]',
          snapshotUrls: 'https://i.gkd.li/i/12745621',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '权限提示-请求开启定位权限弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: ['[text*="开启位置服务"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/15284753',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-首页广告弹窗',
      activityIds: 'com.xiaomi.mico.main.MainActivity',
      rules:
        '[id="com.xiaomi.mico:id/adImage"] + [id="com.xiaomi.mico:id/ivCloseAd"]',
      snapshotUrls: 'https://i.gkd.li/import/12745621',
      enable: true,
    },
  ],
} as any);
