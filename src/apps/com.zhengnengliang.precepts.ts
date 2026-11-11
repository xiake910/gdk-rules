// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhengnengliang.precepts',
  name: '正气',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.ui.activity.MainActivity',
            '.ui.dialog.DialogTwoButton',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <(2,3) FrameLayout[childCount=4] +(1,2) FrameLayout[childCount=2] >2 [text^="立即" || text="去逛逛"]',
          exampleUrls: 'https://e.gkd.li/9b352715-611f-4fa3-a66e-cf9203dddf75',
          snapshotUrls: [
            'https://i.gkd.li/i/12739767',
            'https://i.gkd.li/i/12727705',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/5813656b-8d39-4c14-b459-038fa41366a3',
          snapshotUrls: 'https://i.gkd.li/i/14338307',
        },
      ],
      enable: true,
    },
    {
      key: 1,
      name: '更新提示',
      activityIds: [
        'com.zhengnengliang.precepts.ui.activity.MainActivity',
        'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton',
      ],
      rules: '@[text="取消"] +2 [text="升级"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12727650',
        'https://i.gkd.li/import/12715352',
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-第三方 SDK 广告',
      activityIds: [
        'com.zhengnengliang.precepts.ui.activity.MainActivity',
        'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton',
      ],
      rules: '[text="点此去广告"] + ImageButton[clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12739767',
        'https://i.gkd.li/import/12727705',
      ],
      enable: true,
    },
  ],
} as any);
