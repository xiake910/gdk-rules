// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 1,
      name: '局部广告-消息列表上方广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@FrameLayout > [vid="icft_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13325125',
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '功能类-文件即将过期提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@FrameLayout[vid="layout_close"] -2 TextView[text="文件即将过期请备份"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/13325125',
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '功能类-自动点击原图',
      fastQuery: true,
      actionMaximum: 1,
      activityIds:
        'com.alibaba.android.dingtalk.photoui.activitys.AlbumActivity',
      rules: [
        {
          key: 0,
          matches: 'CheckBox[vid="cb_send_origin"][text="原图"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/13309648',
            'https://i.gkd.li/i/13309845',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@Button[text*="暂不更新"] + Button[text*="更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13402478',
        },
        {
          matches: 'TextView[vid="dialog_close_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13772151',
        },
      ],
      enable: false,
    },
    {
      key: 5,
      name: '功能类-扫码自动登录桌面版',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.alibaba.android.user.qrcode.WebLoginActivity',
      rules: [
        {
          matches: '[vid="btn_login"]',
          snapshotUrls: 'https://i.gkd.li/i/13433981',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '局部广告-文件即将过期提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@FrameLayout[id="com.alibaba.android.rimet:id/layout_close"] -2 TextView[text="文件即将过期请备份"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13325125',
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-钉钉新功能',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.alibaba.lightapp.runtime.activity.WebViewDialogActivity',
      rules: [
        {
          matches:
            'TextView[id="com.alibaba.android.rimet:id/dialog_close_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13772151',
        },
      ],
      enable: true,
    },
  ],
} as any);
