// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '软件详情页',
          fastQuery: true,
          actionDelay: 300,
          activityIds: [
            '.appDetails.AppDetailsActivity',
            '.main.fragments.square.section.forumDetailsActivity',
          ],
          matches: [
            '[vid="itemUser"][visibleToUser=true]',
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid="bannerLayout"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14771070',
            'https://i.gkd.li/i/14771175',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14771110',
            'https://i.gkd.li/i/17879219',
          ],
        },
        {
          key: 1,
          name: '搜索页面',
          activityIds: '.search.searchActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14771429',
        },
        {
          key: 2,
          name: '首页',
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="button_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/14668408',
        },
        {
          key: 3,
          name: '评论区顶部',
          fastQuery: true,
          actionDelay: 300,
          activityIds: '.main.fragments.square.section.forumDetailsActivity',
          matches: [
            '[vid="title_browse"][visibleToUser=true]',
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView <<n [vid="banner"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14758809',
            'https://i.gkd.li/i/14783076',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 2,
      name: '通知提示-公告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: '[text="隐藏"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17892865',
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.cretin.www.cretinautoupdatelibrary.activity.UpdateType10Activity',
          matches: '[vid="tv_update"] <2 * + * > [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13459373',
        },
      ],
      enable: false,
    },
    {
      key: 4,
      name: '局部广告-首页横幅广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches:
            '[vid="item_broadcast"] >2 [vid="button_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c885f80c-9fd5-4fcc-9117-e8fed04ee300',
          snapshotUrls: 'https://i.gkd.li/i/20259691',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '局部广告-搜索-卡片式广告',
      fastQuery: true,
      forcedTime: 1000,
      rules: [
        {
          activityIds: [
            '.search.searchActivity',
            '.main.fragments.square.section.searchPostActivity',
          ],
          matches:
            '@ImageView[visibleToUser=true] < FrameLayout <n [childCount=5] < * < * < * < * < * < [id="com.magicalstory.AppStore:id/banner2"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17618529',
            'https://i.gkd.li/i/17618518',
          ],
        },
        {
          activityIds: '.main.MainActivity',
          matches:
            '@[id="com.magicalstory.AppStore:id/button_close_ad"] - [id="com.magicalstory.AppStore:id/banner_ad2"]',
          snapshotUrls: 'https://i.gkd.li/i/17618820',
        },
      ],
      enable: true,
    },
    {
      key: 3001,
      name: '全屏广告-公告',
      activityIds: 'com.magicalstory.AppStore.main.MainActivity',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[id="com.magicalstory.AppStore:id/txt_dialog_title"][text="公告"]',
            '[id="com.magicalstory.AppStore:id/btn_selectNegative"][text="隐藏"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13437553',
        },
      ],
      enable: true,
    },
    {
      key: 3002,
      name: '局部广告-广场-流式广告',
      fastQuery: true,
      activityIds: '.main.fragments.square.section.sectionActivity',
      rules: [
        {
          matches:
            '@ImageView[visibleToUser=true] < FrameLayout[index=3] <4 FrameLayout <3 LinearLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid="recyclerView"]',
          snapshotUrls: 'https://i.gkd.li/i/20585709',
        },
      ],
      enable: true,
    },
  ],
} as any);
