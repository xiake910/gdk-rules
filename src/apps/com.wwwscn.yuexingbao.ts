// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wwwscn.yuexingbao',
  name: '悦通行',
  groups: [
    {
      key: 1,
      name: '功能类-扫码确认解锁',
      desc: '扫码成功后点击[确认并解锁]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.qrcode.ScanResultActivity',
          matches: ['[text="扫码成功"]', '[text="确认并解锁"]'],
          exampleUrls: 'https://e.gkd.li/31a62ba3-9329-4abe-ab30-99006ffa04d4',
          snapshotUrls: 'https://i.gkd.li/i/17632893',
        },
      ],
      enable: false,
    },
    {
      key: 0,
      name: '开屏广告',
      desc: '字节广告SDK',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        '[id$="tt_splash_skip_btn"]',
        '@View[clickable=true][id=null][visibleToUser=true] +n TextView[clickable=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13239194',
        'https://i.gkd.li/import/13723967',
      ],
      order: -10,
      enable: true,
    },
  ],
} as any);
