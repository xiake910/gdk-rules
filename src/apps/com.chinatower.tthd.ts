// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatower.tthd',
  name: '铁塔换电',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.chinatower.fghd.customer.home.HomeNewActivity',
          matches: '[vid="fl_content_container"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13694901',
        },
      ],
      enable: true,
    },
  ],
} as any);
