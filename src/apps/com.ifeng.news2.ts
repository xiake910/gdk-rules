// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ifeng.news2',
  name: '凤凰新闻',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      fastQuery: true,
      activityIds: [
        '.activity.IfengTabMainActivity',
        '.activity.DocDetailActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            '@[vid="img_feedback_left_of_image"] < LinearLayout -2 LinearLayout >2 [vid="adv_label"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/63216ca1-4f7c-4a95-9b9e-7ac4c894f0c0',
          snapshotUrls: 'https://i.gkd.li/i/19752573',
        },
        {
          key: 2,
          matches:
            '[vid="iv_item_del" || vid="doc_detail_titleimg_ad_delete" || vid="del_click"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0a199f54-70f9-45ae-8025-896b688dc8e6',
          snapshotUrls: [
            'https://i.gkd.li/i/19752570',
            'https://i.gkd.li/i/19752567',
            'https://i.gkd.li/i/19752561',
          ],
        },
        {
          preKeys: [1, 2],
          matches: '@[clickable=true] > [text="不感兴趣"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e182591a-492d-49ec-8820-20bea10495d9',
          snapshotUrls: [
            'https://i.gkd.li/i/19752582',
            'https://i.gkd.li/i/19752559',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '权限提示-定位权限',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.IfengTabMainActivity',
          matches: '[text*="请求您的位置"] + [vid="permission_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12705531',
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-信息流广告',
      activityIds: 'com.ifeng.news2.activity.IfengTabMainActivity',
      rules: [
        {
          key: 1,
          matches:
            '[id="com.ifeng.news2:id/adv_label"] + [id="com.ifeng.news2:id/normal_item_delete_wrap"]',
          snapshotUrls: 'https://i.gkd.li/import/12705500',
        },
        {
          key: 2,
          matches:
            '@[id="com.ifeng.news2:id/img_feedback_left_of_image"] - LinearLayout >(2) [id="com.ifeng.news2:id/adv_label"]',
          snapshotUrls: 'https://i.gkd.li/import/12705508',
        },
        {
          key: 3,
          matches:
            '[id="com.ifeng.news2:id/adv_icon"] + LinearLayout[id="com.ifeng.news2:id/normal_item_delete_wrap"]',
          snapshotUrls: 'https://i.gkd.li/import/12705511',
        },
        {
          key: 4,
          matches:
            '[id="com.ifeng.news2:id/adv_icon"] + TextView + [id="com.ifeng.news2:id/normal_item_delete_wrap"]',
          snapshotUrls: 'https://i.gkd.li/import/12705518',
        },
        {
          key: 5,
          matches:
            '[id="com.ifeng.news2:id/adv_label"] + [id="com.ifeng.news2:id/iv_item_del"]',
          snapshotUrls: 'https://i.gkd.li/import/12705520',
        },
        {
          preKeys: [1, 2, 3, 4, 5],
          key: 9,
          matches:
            '@[id="com.ifeng.news2:id/dialog_dislike_feedback_normal_item_linearlayout"] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12705505',
        },
      ],
      enable: true,
    },
    {
      enable: true,
      key: 3001,
      name: '全屏广告-请求位置权限弹窗',
      desc: '自动点击取消',
      activityIds: 'com.ifeng.news2.activity.IfengTabMainActivity',
      rules:
        '[text*="请求您的位置"] + [id="com.ifeng.news2:id/permission_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12705531',
    },
  ],
} as any);
