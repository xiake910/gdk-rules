// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaoe.client',
  name: '小鹅通',
  groups: [
    {
      key: 1,
      name: '更新提示-版本更新弹窗',
      desc: '点击暂不更新',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaoe.app.ui.main.XiaoeMainActivity',
          matches: 'FrameLayout[vid="centerPopupContainer"] [text="暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13832282',
        },
      ],
      enable: false,
    },
  ],
} as any);
