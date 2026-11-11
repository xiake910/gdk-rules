// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingye.app',
  name: '星野',
  groups: [
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.weaver.app.MainSplashActivity',
          matches: '[vid="settingUpdateCancelTv"]',
          snapshotUrls: 'https://i.gkd.li/i/14137987',
        },
      ],
      enable: false,
    },
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.xingye.app:id/teenagerDialogConfirmTv"]',
      snapshotUrls: 'https://i.gkd.li/import/13766001',
      enable: false,
    },
  ],
} as any);
