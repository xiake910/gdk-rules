// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.ele',
  name: '饿了么',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.afollestad.materialdialogs.MaterialDialog',
            '.application.ui.Launcher.LauncherActivity',
          ],
          matches: ['[text*="更新应用版本"]', '[text="取消"]'],
          exampleUrls: 'https://e.gkd.li/7a0ade81-d2f3-4174-ba6e-9976b8e7ecf5',
          snapshotUrls: [
            'https://i.gkd.li/i/12650280',
            'https://i.gkd.li/i/13206819',
            'https://i.gkd.li/i/18096620',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 0,
          name: '红包弹窗1',
          fastQuery: true,
          activityIds: [
            '.component.pops2.Pops2MistDialog',
            '.component.webcontainer.view.AppUCWebActivity',
            '.application.ui.Launcher.LauncherActivity',
            '.application.ui.GeneralSettingsActivity',
            '.shopdetailv2.ShopDetailV2Activity',
            '.foodchannel.page.WMChannelNativeActivity',
          ],
          anyMatches: [
            '@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < ViewGroup[childCount=2] < [vid="id_magex_mistview"]',
            '@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < [vid="id_magex_mistview"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12650238',
            'https://i.gkd.li/i/13294893',
            'https://i.gkd.li/i/13331361',
            'https://i.gkd.li/i/13362974',
            'https://i.gkd.li/i/13376008',
            'https://i.gkd.li/i/13710581',
            'https://i.gkd.li/i/15148480',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/17858192',
        },
        {
          key: 1,
          name: '红包弹窗2',
          activityIds: '.newretail.pack.ui.activity.PackActivity',
          matches: '[desc$="今日红包"] +n [desc$="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12650713',
        },
        {
          key: 2,
          name: '红包弹窗3',
          fastQuery: true,
          matches:
            '@ViewGroup[index=2][clickable=true][childCount=0][index=parent.childCount.minus(1)] <3 ViewGroup[childCount=3] < ViewGroup[childCount=1] < ViewGroup[vid="id_magex_mist_view"]',
          exampleUrls: 'https://e.gkd.li/a933d63b-14b2-4c91-bdd9-0ba578da6bff',
          snapshotUrls: 'https://i.gkd.li/i/14472929',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/16346727',
            'https://i.gkd.li/i/17858192',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 4,
      name: '全屏广告-活动弹窗',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            '.component.pops2.Pops2MistDialog',
            '.newbooking.checkout.entrypoint.WMCheckoutActivity',
            '.application.ui.Launcher.LauncherActivity',
            '.android.emagex.container.EMagexActivity',
          ],
          matches:
            '@ImageView[clickable=true] <2 [vid="id_magex_mistview"][childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/12726709',
            'https://i.gkd.li/i/13476719',
            'https://i.gkd.li/i/13523508',
            'https://i.gkd.li/i/13685037',
            'https://i.gkd.li/i/14050401',
          ],
        },
        {
          key: 2,
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches:
            '[vid="fl_render_e_shop"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]',
          snapshotUrls: [
            'https://i.gkd.li/i/13476611',
            'https://i.gkd.li/i/13523541',
          ],
        },
        {
          key: 3,
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches: 'ViewGroup[clickable=true] - TextView[text="放弃"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13710574',
            'https://i.gkd.li/i/13710591',
          ],
        },
        {
          key: 4,
          activityIds: '.pha.shell.ui.ElePhaActivity',
          matches:
            'WebView >4 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [vid="pha_view_pager_root_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15443153',
        },
      ],
      enable: true,
    },
    {
      key: 5,
      name: '全屏广告-付款后弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.component.pops2.TransparentAppWebActivity',
          matches:
            'View[childCount=2] > View[childCount=2] > @Button[text="关闭"][clickable=true] <<n [vid="inside_web_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13205301',
        },
      ],
      enable: true,
    },
    {
      key: 6,
      name: '全屏广告-吃货卡续费弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.component.webcontainer.view.AppUCWebActivity',
          matches:
            '@View[clickable=true] + View >2 [visibleToUser=true][text*="立即续费"] <<n [vid="inside_web_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13295007',
        },
      ],
      enable: true,
    },
    {
      key: 7,
      name: '局部广告-首页底部浮窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true][visibleToUser=true] - ViewGroup[childCount=3] <<n [vid="id_magex_mist_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13710588',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16326917',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f706b801-44ee-4009-8082-75c9d4139065',
          snapshotUrls: 'https://i.gkd.li/i/17321305',
        },
      ],
      enable: true,
    },
    {
      key: 8,
      name: '权限提示-定位权限',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      activityIds: '.application.ui.Launcher.LauncherActivity',
      rules: [
        {
          key: 0,
          matches: '[text="去开启"] + [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13710588',
        },
        {
          key: 1,
          matches: '[text="去开启"] + [vid="close_tips"]',
          snapshotUrls: 'https://i.gkd.li/i/13710585',
        },
      ],
      enable: false,
    },
    {
      key: 9,
      name: '通知提示-获取订单信息通知',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.message.ui.PushMessageGuideActivity',
          matches: '@View[visibleToUser=true] < * <2 [vid="frame_bottom_bg"]',
          snapshotUrls: 'https://i.gkd.li/i/13931205',
        },
      ],
      enable: false,
    },
    {
      key: 10,
      name: '评价提示-底部调研邀请卡片',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.foodchannel.page.WMChannelNativeActivity',
          matches: [
            '[text*="小调研"]',
            '[vid="iv_cancel"][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/350d8f4d-8ab0-4572-8ff0-450ab4729d53',
          snapshotUrls: 'https://i.gkd.li/i/14630370',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-付款后广告弹窗',
      fastQuery: true,
      activityIds: 'me.ele.component.pops2.TransparentAppWebActivity',
      rules: 'bb Button[text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13205301',
      enable: true,
    },
    {
      key: 3001,
      name: '局部广告-首页-底部浮窗广告',
      activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
      rules:
        'LinearLayout >n FrameLayout >n ViewGroup[childCount=3] + ViewGroup[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13710588',
      enable: true,
    },
    {
      key: 3002,
      name: '全屏广告-开启定位提醒',
      desc: '自动点击X',
      enable: true,
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '[text="去开启"] + [id="me.ele:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13710588',
        },
        {
          key: 1,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '[text="去开启"] + [id="me.ele:id/close_tips"]',
          snapshotUrls: 'https://i.gkd.li/import/13710585',
        },
      ],
    },
    {
      key: 3003,
      fastQuery: true,
      name: '全屏广告-通知提示-获取订单信息通知',
      desc: '点击X',
      rules: [
        {
          activityIds: 'me.ele.message.ui.PushMessageGuideActivity',
          matches:
            '@View[visibleToUser=true] < * <2 [id="me.ele:id/frame_bottom_bg"]',
          snapshotUrls: 'https://i.gkd.li/import/13931205',
        },
      ],
      enable: true,
    },
  ],
} as any);
