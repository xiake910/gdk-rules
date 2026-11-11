// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
    {
      key: 3,
      name: '功能类-自动打卡',
      desc: '点击[打卡],切换板块自动签到',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.HyperionMainActivity',
          matches: 'TextView[vid="signTv"][text="打卡"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13721772',
            'https://i.gkd.li/i/13721776',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 6,
      name: '全屏广告-游戏版本活动',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.popup.HomePopupDialogActivity',
          matches: '[vid="closeIv"]',
          exampleUrls: 'https://e.gkd.li/5c54c1cc-95ae-420d-b3af-37e8553a6327',
          snapshotUrls: 'https://i.gkd.li/i/16818949',
        },
      ],
      enable: true,
    },
    {
      key: 7,
      name: '分段广告-游戏版本活动',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: '.main.HyperionMainActivity',
      exampleUrls: 'https://e.gkd.li/197dfb66-6b42-4fbd-b60c-4d801a8c729c',
      rules: [
        {
          key: 0,
          name: '点击关闭',
          matches: '[vid="bottomBarBgIv"] + * > [vid="close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/16996311',
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击确定',
          matches: '[vid="rootLayout"] > [vid="confirmTv"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/16996319',
        },
      ],
      enable: true,
    },
    {
      key: 8,
      name: '功能类-米游自动签到全家桶',
      desc: '包含崩坏3、绝区零、原神、星穹铁道',
      forcedTime: 10000,
      activityIds: '.web2.MiHoYoWebActivity',
      rules: [
        {
          key: 0,
          name: '点击签到',
          excludeMatches: '[text^="请在此绑定你的"][visibleToUser=true]',
          anyMatches: [
            '[getChild(0).getChild(1).text*="签到"] + View >2 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0][text!=null]',
            '[getChild(0).getChild(1).text*="签到"] + View >2 View[childCount=10] > View + TextView[childCount=0][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/53d22dc7-b368-46c0-85d2-fe132b0832a9',
          snapshotUrls: [
            'https://i.gkd.li/i/17601269',
            'https://i.gkd.li/i/17601338',
            'https://i.gkd.li/i/17611619',
            'https://i.gkd.li/i/17611613',
            'https://i.gkd.li/i/14967627',
            'https://i.gkd.li/i/19586048',
            'https://i.gkd.li/i/19586142',
            'https://i.gkd.li/i/34215019',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/17601295',
            'https://i.gkd.li/i/17601347',
            'https://i.gkd.li/i/17611621',
            'https://i.gkd.li/i/19581359',
            'https://i.gkd.li/i/17611617',
            'https://i.gkd.li/i/19586048',
            'https://i.gkd.li/i/19586142',
            'https://i.gkd.li/i/19587714',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '关闭签到后的弹窗',
          matches:
            '@TextView[visibleToUser=true][text=""] - View[childCount=2] >2 [text*="签到成功"]',
          exampleUrls: 'https://e.gkd.li/ef30277a-bd5d-444a-a9d5-ce63406d1269',
          snapshotUrls: [
            'https://i.gkd.li/i/17601273',
            'https://i.gkd.li/i/17601340',
            'https://i.gkd.li/i/17611620',
            'https://i.gkd.li/i/17611616',
            'https://i.gkd.li/i/14967631',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '关闭签到提醒',
          matches: '[text="不用了"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/56299b94-01fb-4d83-9796-ec9bd6bbae64',
          snapshotUrls: [
            'https://i.gkd.li/i/17601283',
            'https://i.gkd.li/i/17601345',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '从签到页返回',
          excludeMatches: '[text="不用了"][visibleToUser=true]',
          matches:
            'WebView[text*="签到"] > View >3 View[index=0][childCount=1] > TextView[childCount=0][text=""][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/cc68f623-5dc7-4703-9768-28826c4f16f6',
          snapshotUrls: [
            'https://i.gkd.li/i/17601295',
            'https://i.gkd.li/i/17601347',
            'https://i.gkd.li/i/17611621',
            'https://i.gkd.li/i/17611617',
            'https://i.gkd.li/i/17629453',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/17601283',
            'https://i.gkd.li/i/17601345',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.HyperionMainActivity',
          matches: [
            '[text^="开启通知提醒"]',
            '@[clickable=true] > [text$="拒绝"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24489020',
        },
      ],
      enable: false,
    },
    {
      key: 10,
      name: '功能类-自动开启参量质变仪提醒',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.web2.MiHoYoWebActivity',
          matches: '[text="提醒"] <n @[clickable=true] - [text="参量质变仪"]',
          snapshotUrls: 'https://i.gkd.li/i/25608285',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25608302',
        },
      ],
      enable: false,
    },
    {
      key: 1,
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      activityIds: [
        'com.mihoyo.hyperion.main.HyperionMainActivity',
        'com.mihoyo.hyperion.splash.SplashActivity',
      ],
      rules:
        'TextView[id="com.mihoyo.hyperion:id/tv_dialog_go_to_teenage_mode"] + TextView[id="com.mihoyo.hyperion:id/tv_dialog_i_know"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12675547',
        'https://i.gkd.li/import/12775850',
      ],
      enable: false,
    },
    {
      key: 2,
      name: '更新提示',
      desc: '关闭版本更新提示弹窗',
      rules: 'TextView[id="com.mihoyo.hyperion:id/mUpgradeDialogCancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12675513',
      enable: false,
    },
  ],
} as any);
