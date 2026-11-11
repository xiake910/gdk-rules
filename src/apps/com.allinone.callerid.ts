// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.allinone.callerid',
  name: 'Showcaller',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="mys-content"] > View > View > Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13696207',
        },
        {
          key: 1,
          matches: '[id="close-button"] > View > View > Image',
          snapshotUrls: 'https://i.gkd.li/i/13696205',
        },
      ],
      enable: true,
    },
  ],
} as any);
