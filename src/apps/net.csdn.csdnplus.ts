// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['.activity.MainActivity', '.activity.SetActivity'],
          matches: '[vid="update"] -2 [vid="cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673693',
            'https://i.gkd.li/i/12673654',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      fastQuery: true,
      activityIds: '.activity.MainActivity',
      rules: [
        {
          key: 1,
          matches: '[text="广告"] + [vid="iv_more"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673738',
            'https://i.gkd.li/i/13224538',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '@[clickable=true] > [vid="img_feedback_title"][text="重复推荐该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673787',
            'https://i.gkd.li/i/13224551',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '评价提示-软件好评弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MainActivity',
          matches: '[vid="tv_cancel"][text="残忍拒绝"]',
          snapshotUrls: 'https://i.gkd.li/i/13251085',
        },
      ],
      enable: false,
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击【x】',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches:
            'LinearLayout[childCount=2] > [vid="img_cancel"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25171470',
          exampleUrls: 'https://e.gkd.li/3debb965-7773-4160-b172-15dc052ac6c9',
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MainActivity',
          matches: ['[text="开启推送通知"]', '[vid="iv_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/12673638',
        },
      ],
      enable: false,
    },
    {
      key: 11,
      name: '分段广告-底部广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.mvvm.ui.activity.BlogDetailActivity',
          matches:
            'ViewGroup > ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][childCount=0][visibleToUser=true] <<n [vid="fl_template_container" || vid="fl_bottom_ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830821',
            'https://i.gkd.li/i/14312501',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: '.mvvm.ui.activity.BlogDetailActivity',
          matches: '@LinearLayout[clickable=true] >(1,2) [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830858',
            'https://i.gkd.li/i/14312349',
            'https://i.gkd.li/i/24376480',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: ['https://i.gkd.li/import/12673680'],
        },
        {
          matches:
            '@View + TextView <(3,4,5) FrameLayout <(1,2) FrameLayout <<(1,2) [id="net.csdn.csdnplus:id/fl_third_ad"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13826577',
            'https://i.gkd.li/import/13224627',
            'https://i.gkd.li/i/17405187',
          ],
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-信息流广告',
      fastQuery: true,
      activityIds: ['net.csdn.csdnplus.activity.MainActivity'],
      rules: [
        {
          key: 1,
          matches: '[text="广告"] + [id="net.csdn.csdnplus:id/iv_more"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12673738',
            'https://i.gkd.li/import/13224538',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          matches:
            '@[clickable=true] > [id="net.csdn.csdnplus:id/img_feedback_title"][text="重复推荐该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12673787',
            'https://i.gkd.li/import/13224551',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-关闭好评弹窗',
      resetMatch: 'app',
      actionMaximum: 1,
      fastQuery: true,
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: '[id="net.csdn.csdnplus:id/tv_cancel"][text="残忍拒绝"]',
      snapshotUrls: 'https://i.gkd.li/import/13251085',
      enable: true,
    },
    {
      enable: true,
      key: 3002,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      name: '全屏广告-请求推送通知弹窗',
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: {
        matches: [
          '[text="开启推送通知"]',
          '[id="net.csdn.csdnplus:id/iv_close"]',
        ],
        snapshotUrls: ['https://i.gkd.li/import/12673638'],
      },
    },
  ],
} as any);
