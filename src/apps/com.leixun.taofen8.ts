// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.leixun.taofen8',
  name: '淘粉吧',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches:
            '@View[clickable=true] <<n [id="com.leixun.taofen8:id/fl_advert_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13937324',
        },
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
