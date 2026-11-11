// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
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
          key: 0,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12867875',
            'https://i.gkd.li/i/16812698',
          ],
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: [
            '.activity.main.activity.MainActivity',
            '.activity.questionsearch.camera.activity.PicSearchResultActivity',
            '.activity.camerasdk.ZybCameraSDKActivity',
            '.activity.common.CommonCacheHybridActivity',
          ],
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12867751',
            'https://i.gkd.li/i/12894813',
            'https://i.gkd.li/i/13522998',
            'https://i.gkd.li/i/14554866',
          ],
        },
        {
          key: 1,
          name: '快手广告-1',
          fastQuery: true,
          activityIds: [
            '.activity.main.activity.MainActivity',
            '.activity.questionsearch.camera.activity.PicSearchResultActivity',
          ],
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup <n * + ViewGroup >3 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13451304',
            'https://i.gkd.li/i/14519779',
            'https://i.gkd.li/i/14731371',
          ],
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches: 'Image < @View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13523288',
        },
        {
          key: 4,
          name: '字节广告-2',
          fastQuery: true,
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches:
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893408',
            'https://i.gkd.li/i/13929945',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.mercury.sdk.activity.InterstitialPortraitActivity',
          matches: '[vid="iv_itr_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15360368',
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
            '.activity.booksearch.result.activity.AnswerBrowseActivity',
          ],
          matches: '[vid="close_m_image_left_text_right_app_compliance"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849755',
            'https://i.gkd.li/i/13929965',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            '.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches:
            '[id^="com.zmzx.college.search:id/ad_flag_source"] - * > [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13063381',
        },
      ],
      enable: true,
    },
    {
      key: 5,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.activity.main.activity.MainActivity',
            '.activity.init.InitActivity',
          ],
          matches: '[vid="update_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13063373',
            'https://i.gkd.li/i/13623469',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 6,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.main.activity.MainActivity',
          matches: '[text="开启推送通知"] - [vid="siv_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13440939',
        },
      ],
      enable: false,
    },
    {
      key: 7,
      name: '评价提示-请求好评弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.camerasdk.ZybCameraSDKActivity',
          matches: '[vid="iv_logo"] + [vid="siv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13476308',
        },
      ],
      enable: false,
    },
    {
      key: 11,
      name: '全屏广告-邀好友得开学好礼',
      desc: '使用返回关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds: '.activity.common.CommonCacheHybridActivity',
          matches:
            '[visibleToUser=true][text="邀好友得开学好礼"] <<n [vid="webview_root_layout"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb',
          snapshotUrls: 'https://i.gkd.li/i/14555042',
        },
      ],
      enable: true,
    },
    {
      key: 12,
      name: '分段广告-底部卡片广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      activityIds: '.activity.booksearch.result.activity.AnswerBrowseActivity',
      rules: [
        {
          key: 0,
          matches: '@[desc$="dislike"] <<n [vid="rlBottomADContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/15902162',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15902298',
        },
      ],
      enable: true,
    },
    {
      enable: true,
      key: 1,
      name: '全屏广告-首页-推送通知',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12867853',
    },
    {
      key: 3000,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: [
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
          ],
          matches: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12867751',
            'https://i.gkd.li/import/12894813',
          ],
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds: 'com.bbk.launcher2.Launcher',
          matches:
            '[text="广告"] <2 ViewGroup -3 ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13346628',
        },
        {
          key: 2,
          name: '快手广告-2',
          activityIds:
            'com.zmzx.college.search.activity.main.activity.MainActivity',
          matches: [
            'ViewGroup > ViewGroup > ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup > ViewGroup > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13451304',
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
          matches:
            '[id="com.zmzx.college.search:id/ad_flag_source_layout"] + [id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13522998',
        },
        {
          key: 4,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches: '@Image < View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13523288',
        },
        {
          key: 5,
          name: '字节广告-3',
          fastQuery: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[clickable=true] > [id="com.zmzx.college.search:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12893408',
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches: '[vid="close_m_image_left_text_right_app_compliance"]',
          snapshotUrls: 'https://i.gkd.li/import/13849755',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches:
            '[id^="com.zmzx.college.search:id/ad_flag_source"] - * > [id="com.zmzx.college.search:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13063381',
        },
      ],
      enable: true,
    },
    {
      key: 3002,
      name: '权限提示-申请开启推送通知弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          matches:
            '[text="开启推送通知"] - [id="com.zmzx.college.search:id/siv_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13440939',
        },
      ],
    },
    {
      key: 3003,
      name: '全屏广告-请求好评弹窗',
      activityIds:
        'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
      fastQuery: true,
      rules:
        '[id="com.zmzx.college.search:id/iv_logo"] + [id="com.zmzx.college.search:id/siv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13476308',
      enable: true,
    },
    {
      key: 8,
      name: '局部广告-教材内弹窗广告1',
      fastQuery: true,
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
      snapshotUrls: ['https://i.gkd.li/import/13929945'],
      enable: true,
    },
    {
      key: 9,
      name: '局部广告-教材内弹窗广告2',
      fastQuery: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13929981'],
      enable: true,
    },
    {
      key: 10,
      name: '局部广告-教材内底部广告',
      fastQuery: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      ],
      rules:
        '[id="com.zmzx.college.search:id/close_m_image_left_text_right_app_compliance"]',
      snapshotUrls: ['https://i.gkd.li/import/13929965'],
      enable: true,
    },
  ],
} as any);
