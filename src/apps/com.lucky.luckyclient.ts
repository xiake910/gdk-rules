// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lucky.luckyclient',
  name: '瑞幸咖啡',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.luckin.client.main.FirstActivity',
          matches:
            '@ImageView[vid="dismiss_btn"] - LinearLayout > ImageView[vid="update_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12846499',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '全屏广告-超值换购弹窗',
      desc: '关闭超值换购弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.preview2.OrderPreviewActivity2',
          matches: '[vid="close_iv"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12922834',
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '全屏广告-优惠卷领取提示',
      desc: '按下返回键关闭优惠卷领取提示',
      rules: [
        {
          activityIds: 'com.luckin.client.main.FirstActivity',
          action: 'back',
          matches: '[vid="webcontent"]',
          snapshotUrls: 'https://i.gkd.li/i/13164114',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '全屏广告-超值换购',
      desc: '关闭超值换购弹窗',
      enable: true,
      activityIds: 'com.lucky.luckyclient.preview2.OrderPreviewActivity2',
      fastQuery: true,
      rules: '[id="com.lucky.luckyclient:id/close_iv"][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/import/12922834',
    },
  ],
} as any);
