// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.bm.mainbox.main.MainActivity',
          matches: 'TextView[text^="打开通知"] +2 [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13249998',
        },
        {
          key: 1,
          activityIds: '.bm.common.web.ui.WebActivity',
          matches:
            '@View - * > [visibleToUser=true][text="开启并订阅通知"] <<n [vid="webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13255656',
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.bm.mainbox.main.MainActivity',
          matches:
            '@ImageButton[vid="ib_close"] + RelativeLayout [text^="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13628364',
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '评价提示-满意度打分弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.dy.api.JRDynamicPickerActivity',
          matches: '@ImageView[clickable=true] - [text$="满意度打几分？"]',
          snapshotUrls: 'https://i.gkd.li/i/13804561',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-通知提醒',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: [
        'com.jd.jrapp.bm.mainbox.main.MainActivity',
        'com.jd.jrapp.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
          matches:
            'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13249998',
        },
        {
          activityIds: 'com.jd.jrapp.bm.common.web.ui.WebActivity',
          matches: 'View[text="开启并订阅通知"] < View + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13255656',
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-满意度打分弹窗',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: '[text*="满意度打几分"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13804561',
      enable: true,
    },
  ],
} as any);
