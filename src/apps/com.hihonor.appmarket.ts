// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="tv_operation_skip" || vid="btn_skip"]',
          exampleUrls: 'https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6',
          snapshotUrls: [
            'https://i.gkd.li/i/16406381',
            'https://i.gkd.li/i/29175881',
          ],
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.hihonor.android.launcher.unihome.UniHomeLauncher',
            '.module.main.MainActivity',
          ],
          matches: '[vid="iv_dialog_operation_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13063815',
            'https://i.gkd.li/i/13168440',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '局部广告-悬浮窗小广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.main.MainActivity',
          matches: '[vid="iv_floating_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13063928',
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: '.module.main.MainActivity',
          matches:
            'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
          snapshotUrls: 'https://i.gkd.li/i/13073319',
        },
      ],
      enable: false,
    },
    {
      key: 4,
      name: '通知提示-个性化内容推荐提示',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.main.MainActivity',
          matches: [
            '[text*="个性化的内容推荐"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/12825cd1-cd11-40eb-80e3-45d93c9ad058',
          snapshotUrls: 'https://i.gkd.li/i/21884571',
        },
      ],
      enable: false,
    },
    {
      key: 5,
      name: '功能类-自动[查看更多]应用更新',
      desc: '点击[查看更多]',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 3,
          resetMatch: 'app',
          activityIds: '.appupdate.UpdateManagerActivity',
          matches: '@[clickable=true] > [text="查看更多"]',
          snapshotUrls: 'https://i.gkd.li/i/34304183',
          exampleUrls: 'https://e.gkd.li/f7626132-4702-4cd4-b036-88935f45734d',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-广告提示',
      fastQuery: true,
      activityIds: [
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
        'com.hihonor.appmarket.module.main.MainActivity',
      ],
      rules: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063815',
        'https://i.gkd.li/import/13168440',
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-推送通知',
      fastQuery: true,
      activityIds: 'com.hihonor.appmarket.module.main.MainActivity',
      rules:
        'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
      snapshotUrls: 'https://i.gkd.li/import/13073319',
      enable: true,
    },
    {
      key: 3002,
      name: '全屏广告-为您专属推荐',
      desc: '【取消】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            'Button[id="com.hihonor.appmarket:id/app_recommendation_cancel_btn"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/19222443',
        },
      ],
      enable: true,
    },
    {
      key: 3003,
      name: '全屏广告-应用推荐卡片添加至桌面',
      desc: '【我再想想】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            'Button[id="com.hihonor.appmarket:id/app_cancel_btn"][text="我再想想"]',
          snapshotUrls: 'https://i.gkd.li/i/19222473',
        },
      ],
      enable: true,
    },
    {
      key: 6,
      name: '全屏广告-个性化内容推荐',
      desc: '【取消】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            'Button[id="android:id/button2"][text="取消"] + Button[id="android:id/button1"][text="同意"]',
          snapshotUrls: 'https://i.gkd.li/i/19222508',
        },
      ],
      enable: true,
    },
    {
      key: 7,
      name: '通知提示',
      desc: '【取消】',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.module.main.MainActivity',
      rules: [
        {
          matches:
            '@Button[id="android:id/button2"][text="取消"] + Button[id="android:id/button1"][text="立即开启"]',
          snapshotUrls: 'https://i.gkd.li/i/19222532',
        },
      ],
      enable: false,
    },
  ],
} as any);
