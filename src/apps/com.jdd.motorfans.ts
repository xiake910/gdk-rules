// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdd.motorfans',
  name: '摩托范',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.modules.detail.DetailActivity2',
            '.search.SearchMainActivity',
            '.modules.base.FragmentContainerActivity',
            '.message.ChatDetailActivity',
            '.MTMainActivity',
          ],
          matches: '[vid="ad_content"] >n [vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798654',
            'https://i.gkd.li/i/12878843',
            'https://i.gkd.li/i/12913956',
            'https://i.gkd.li/i/13188861',
            'https://i.gkd.li/i/14546613',
          ],
        },
        {
          key: 2,
          activityIds: ['.MTMainActivity', '.modules.detail.DetailActivity2'],
          matches:
            '[vid="iv_right_top_close" || vid="ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0f4b8d7d-fda4-43ee-b892-3a85d6dae278',
          snapshotUrls: [
            'https://i.gkd.li/i/12826288',
            'https://i.gkd.li/i/17002101',
            'https://i.gkd.li/i/17078108',
            'https://i.gkd.li/i/20918047',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      activityIds: '.MTMainActivity',
      rules: [
        {
          key: 0,
          name: '点关闭按钮',
          matches:
            '[vid="recyclerView"] > FrameLayout[vid="container"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12826382',
        },
        {
          preKeys: [0],
          name: '点击不感兴趣',
          matches:
            'TextView[vid="beizi_dislike_item_multi_one_title"][text*="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12829069',
        },
      ],
      enable: true,
    },
    {
      key: 3,
      name: '全屏广告-文章内容页面弹窗广告',
      activityIds: '.modules.zone.search.ZoneInsideSearchActivity',
      rules: [
        {
          key: 0,
          name: '点x按钮',
          matches: '[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12888087',
        },
      ],
      enable: true,
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.MTMainActivity',
            '.modules.detail.DetailActivity2',
            '.cars.MotorDetailActivity2',
            '.modules.carbarn.brand.detail.MBrandDetailActivity',
          ],
          matches: '[vid="close_b_t_a_i_b_no_compliance"]',
          exampleUrls: 'https://e.gkd.li/daf8ea52-a935-4e58-9e27-c5cb28fa9cf0',
          snapshotUrls: [
            'https://i.gkd.li/i/16685033',
            'https://i.gkd.li/i/16859608',
            'https://i.gkd.li/i/17162753',
            'https://i.gkd.li/i/17533553',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-信息流广告',
      activityIds: ['com.jdd.motorfans.MTMainActivity'],
      rules: [
        {
          name: '点x按钮',
          key: 0,
          matches:
            '[id="com.jdd.motorfans:id/recyclerView"] > FrameLayout[id="com.jdd.motorfans:id/container"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]',
          snapshotUrls: ['https://i.gkd.li/import/12826382'],
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          matches: [
            'TextView[id="com.jdd.motorfans:id/beizi_dislike_item_multi_one_title"][text*="不感兴趣"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/12829069'],
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-文章内容弹窗',
      activityIds: [
        'com.jdd.motorfans.modules.zone.search.ZoneInsideSearchActivity',
      ],
      rules: [
        {
          name: '点x按钮',
          key: 0,
          matches: '[id="com.jdd.motorfans:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12888087'],
        },
      ],
      enable: true,
    },
  ],
} as any);
