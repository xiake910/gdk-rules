// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.lite',
  name: '今日头条极速版',
  groups: [
    {
      key: 1,
      name: '功能类-全自动续听书时长',
      desc: '<03:45有效,时长不足自动看广告',
      fastQuery: true,
      activityIds: [
        'com.ss.android.list.news.activity.AudioNewsListActivity',
        'com.ss.android.excitingvideo.ExcitingVideoActivity',
      ],
      rules: [
        {
          key: 0,
          name: '③已完成-关闭',
          matches:
            '[text^="03:" && text.substring(3,5).toInt()>45] - [text="剩余时长"] < * -3 @ImageView[width<102 && height<102] + [text^="领取成功"]',
          snapshotUrls: 'https://i.gkd.li/i/26456102',
        },
        {
          key: 1,
          name: '①点击看视频',
          matches:
            '[text.get(1).toInt()<3 || (text^="03:" && text.substring(3,5).toInt()<45)] - [text="剩余时长"] < * + [text^="看视频领取"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26456075',
          exampleUrls: 'https://e.gkd.li/dec3910f-ee59-482b-99e0-aba6de33c67c',
        },
        {
          preKeys: [1],
          name: '②领取成功x掉',
          matches:
            'ImageView < @ViewGroup[childCount=1][visibleToUser=true] <n ViewGroup[childCount>6] <<6 [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26456098',
          excludeSnapshotUrls: 'https://i.gkd.li/i/26456099',
          exampleUrls: 'https://e.gkd.li/720a223e-70af-455a-965c-dcf1a7228921',
        },
      ],
      enable: false,
    },
    {
      enable: true,
      key: 10,
      name: '全屏广告-首页-红包弹窗',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: '@[desc="关闭"] + [text$="现金红包"]',
      snapshotUrls: 'https://i.gkd.li/import/12705414',
    },
    {
      key: 11,
      name: '局部广告-首页-右侧悬浮广告',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules:
        'FrameLayout[id!=null] > @ImageView[id!=null][clickable=true] + ImageView[id!=null]',
      snapshotUrls: 'https://i.gkd.li/import/12705452',
      enable: true,
    },
    {
      enable: true,
      key: 12,
      name: '全屏广告-首页-你可能感兴趣的人',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: '[text="你可能感兴趣的人"] + [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/12705427',
    },
    {
      enable: false,
      key: 20,
      name: '功能类-任务页面-签到弹窗',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: [
        {
          matches:
            'UIView[clickable=false] + LynxFlattenUI[clickable=true][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/12705439',
        },
      ],
    },
    {
      enable: true,
      key: 21,
      name: '局部广告-任务页面-右侧悬浮红包',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: 'UIScrollView + UIView + UISvg',
      snapshotUrls: 'https://i.gkd.li/import/12705447',
    },
    {
      enable: true,
      key: 22,
      name: '全屏广告-任务页面-答题弹窗',
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: [
        {
          matches:
            '[text^="答对"][text$="金币"] + FlattenUIImage[clickable=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/12705456',
        },
      ],
    },
    {
      enable: true,
      key: 30,
      name: '全屏广告-搜索页面-搜索得金币弹窗',
      activityIds: 'com.android.bytedance.search.SearchActivity',
      rules: [
        {
          matches: '[text^="搜索"][text$="金币"] + LynxFlattenUI + UISvg',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/12705468',
        },
      ],
    },
  ],
} as any);
