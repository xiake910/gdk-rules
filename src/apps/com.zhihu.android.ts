// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            '.app.SearchActivity',
            '.comment.ui.activity.CommentListActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matches:
            '([vid="btn_skip"][visibleToUser=true]) || ([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true])',
          exampleUrls: 'https://e.gkd.li/e129aaa6-bf4f-4455-9242-a6779667d814',
          snapshotUrls: [
            'https://i.gkd.li/i/18221451',
            'https://i.gkd.li/i/22714295',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18221225',
            'https://i.gkd.li/i/23141429',
            'https://i.gkd.li/i/24229324',
          ],
        },
        {
          key: 1,
          matches:
            'TextView[width<114 && height<67] - @View[clickable=true][visibleToUser=true][width<135] <3 FrameLayout[childCount=4][getChild(1).getChild(0).childCount=3] <2 FrameLayout[childCount=2][getChild(0).width=0] < [vid="show_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30968922',
            'https://i.gkd.li/i/31332983',
          ],
        },
        {
          key: 2,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/30968922',
        },
      ],
      order: -10,
      enable: true,
    },
    {
      key: 6,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.feature.short_container_feature.ui.',
            '.ContentActivity',
          ],
          matches:
            '@[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup >n [text*="广告"][childCount=0][id=null][desc=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849671',
            'https://i.gkd.li/i/14645530',
            'https://i.gkd.li/i/14178516',
            'https://i.gkd.li/i/13849442',
            'https://i.gkd.li/i/14178979',
            'https://i.gkd.li/i/14178980',
            'https://i.gkd.li/i/14206949',
            'https://i.gkd.li/i/14206988',
            'https://i.gkd.li/i/18008867',
            'https://i.gkd.li/i/25572259',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/17002118',
            'https://i.gkd.li/i/17002119',
            'https://i.gkd.li/i/17002120',
          ],
        },
        {
          key: 1,
          activityIds: [
            '.ContentActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matches:
            'ImageView < @[index=parent.childCount.minus(1)][clickable=true][width<150] <n ViewGroup + [childCount=2] >3 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28661886',
            'https://i.gkd.li/i/28590141',
          ],
        },
        {
          key: 2,
          activityIds: '.app.ui.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][childCount=0] < FrameLayout[childCount=1] - * > [text*="广告" || text$="商品介绍"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14296163',
            'https://i.gkd.li/i/14321041',
            'https://i.gkd.li/i/14468152',
            'https://i.gkd.li/i/17237944',
          ],
        },
        {
          key: 3,
          activityIds: [
            '.app.ui.activity.MainActivity',
            '.ContentActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matches:
            '@ViewGroup[clickable=true][childCount=1] <(2,3,4) ViewGroup -(2,3) ViewGroup[childCount>1] >(1,2) [text*="广告"]',
          exampleUrls: 'https://e.gkd.li/60c4dea8-99c1-4a6f-aca6-a098b5ed76d7',
          snapshotUrls: [
            'https://i.gkd.li/i/14192451',
            'https://i.gkd.li/i/18217217',
            'https://i.gkd.li/i/19591989',
            'https://i.gkd.li/i/21813914',
            'https://i.gkd.li/i/24214771',
          ],
        },
        {
          key: 4,
          activityIds: '.app.ui.activity.MainActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] <3 ViewGroup < ViewGroup -(2,3) ViewGroup >2 [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14332161',
            'https://i.gkd.li/i/14730741',
          ],
        },
        {
          key: 5,
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: '@[vid="remove"] - [vid="subtitle"][text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17268845',
            'https://i.gkd.li/i/17268869',
          ],
        },
        {
          key: 50,
          preKeys: [0, 1, 2, 3, 4, 5],
          name: '②点击[不感兴趣]',
          activityIds: [
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
            '.ContentActivity',
            '.app.ui.activity.MainActivity',
          ],
          matches:
            '@[clickable=true] >(1,3) [text$="不感兴趣" || text^="屏蔽作者" || text="不喜欢该内容"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849689',
            'https://i.gkd.li/i/17237940',
            'https://i.gkd.li/i/17268849',
            'https://i.gkd.li/i/23431871',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: [
            '.app.ui.activity.MainActivity',
            '.mix.activity.ContentMixProfileActivity',
            '.app.ui.activity.HostActivity',
          ],
          matches: [
            '[text$="内容推送" || text="开启私信通知"]',
            '[vid="btn_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18057057',
            'https://i.gkd.li/i/20647853',
            'https://i.gkd.li/i/22762314',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 12,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '会员页弹窗广告',
          activityIds: '.app.ui.activity.MainActivity',
          matches: '[vid="dismiss"]',
          snapshotUrls: 'https://i.gkd.li/i/12707676',
        },
        {
          key: 1,
          name: '首页弹窗广告',
          activityIds: '.app.ui.activity.AdAlphaVideoActivity',
          matches: '[vid="tv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14648128',
        },
        {
          key: 2,
          name: '会员页红包弹窗',
          activityIds: '.app.ui.activity.MainActivity',
          matches: '[vid="floating_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12647421',
        },
        {
          key: 3,
          action: 'clickCenter',
          activityIds: '.creatorcenter.CreatorCenterHostActivity',
          matches:
            'View[text="关闭"] > @[visibleToUser=true][text="关闭"] <<n [vid="webview_bg"]',
          snapshotUrls: 'https://i.gkd.li/i/14955183',
        },
      ],
      enable: true,
    },
    {
      key: 13,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '搜索栏上方广告',
          fastQuery: true,
          activityIds: '.app.ui.activity.MainActivity',
          matches: ['[vid="ad_container"]', '[vid="img_close_focus"]'],
          exampleUrls:
            'https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723',
          snapshotUrls: 'https://i.gkd.li/i/14156887',
        },
        {
          key: 1,
          name: '评论区广告',
          fastQuery: true,
          activityIds: '.comment.ui.activity.CommentListActivity',
          matches:
            '@ViewGroup[childCount=1][clickable=true][visibleToUser=true][getChild(0).name$="SvgView"] - [text="广告"]',
          exampleUrls: 'https://e.gkd.li/d81b6bc4-f4f9-466d-8edb-7af27c707ca5',
          snapshotUrls: 'https://i.gkd.li/i/20711018',
        },
        {
          key: 2,
          name: '优质答主推荐',
          fastQuery: true,
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: '@[vid="ic_close"][clickable=true] -n [text="更多优质答主"]',
          snapshotUrls: 'https://i.gkd.li/i/24335648',
        },
      ],
      enable: true,
    },
    {
      key: 14,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@[index=parent.childCount.minus(1)][clickable=true][width<150] -n [text^="知乎" || text="创作者小助手"][index!=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/14235024',
            'https://i.gkd.li/i/14944631',
            'https://i.gkd.li/i/14232195',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14232195',
        },
        {
          key: 2,
          activityIds: [
            '.mix.activity.ContentMixProfileActivity',
            '.mixshortcontainer.MixShortContainerActivity',
          ],
          matches:
            '@[text="" || text="×"][childCount=0][width<110 && height<110] <n [childCount>2] > [visibleToUser=true][text$="广告" || text="查看详情"] <<n [vid="web_frame" || vid="view_content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14220104',
            'https://i.gkd.li/i/14421277',
            'https://i.gkd.li/i/15285359',
            'https://i.gkd.li/i/14391614',
            'https://i.gkd.li/i/15282584',
            'https://i.gkd.li/i/20648888',
          ],
        },
      ],
      enable: true,
    },
    {
      key: 15,
      name: '局部广告-悬浮广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '发现页面-右侧年卡折扣悬浮窗',
          activityIds: '.app.ui.activity.MainActivity',
          matches: ['[vid="activity_img"]', '[vid="activity_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/14296251',
        },
        {
          key: 1,
          name: '首页-右侧悬浮窗广告',
          activityIds: '.app.ui.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14635636',
        },
        {
          key: 2,
          name: '回答页-底部关注悬浮窗',
          activityIds:
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: '[vid="close_img"]',
          snapshotUrls: 'https://i.gkd.li/i/14970008',
        },
        {
          key: 3,
          activityIds: '.mix.activity.ContentMixProfileActivity',
          matches:
            'View[childCount=3] > @View[clickable=true][childCount=1][text=""] > Image[childCount=0][text=""] <<n [vid="view_content"]',
          exampleUrls: 'https://e.gkd.li/6b9afb50-47a3-4426-a157-9b170b57c616',
          snapshotUrls: 'https://i.gkd.li/i/16422471',
        },
      ],
      enable: true,
    },
    {
      key: 16,
      name: '更新提示',
      matchTime: 10000,
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: [
        '.app.ui.activity.MainActivity',
        '.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 0,
          name: '勾选[不再提醒]',
          matches: 'CheckBox[text="不再提醒"][checked=false][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: [
            'https://i.gkd.li/i/14445502',
            'https://i.gkd.li/i/14445815',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[取消]',
          matches: ['[text="去应用市场"]', '[text="取消"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: 'https://i.gkd.li/i/14445502',
        },
      ],
      enable: false,
    },
    {
      key: 17,
      name: '功能类-热榜页自动点击[展开更多]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.app.ui.activity.MainActivity',
          matches: '@[clickable=true] >2 [text="展开更多"]',
          exampleUrls:
            'https://m.gkd.li/57941037/09616b29-8a83-4f0f-9f8e-0100fa61738d',
          snapshotUrls: 'https://i.gkd.li/i/14974198',
        },
      ],
      enable: false,
    },
    {
      key: 18,
      name: '功能类-自动展开回答',
      desc: '自动点击展开',
      rules: [
        {
          fastQuery: true,
          activityIds: '.mixshortcontainer.MixShortContainerActivity',
          matches:
            'ImageView[vid="iv_expand"] - TextView[vid="tv_expand"][text="展开"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6f6e5fd0-98a8-4a92-be02-7f34e3c5b8bd',
          snapshotUrls: [
            'https://i.gkd.li/i/12647688',
            'https://i.gkd.li/i/12707687',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 19,
      name: '评价提示-评论区氛围评价卡片',
      desc: '点击关闭',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.comment.ui.activity.CommentListActivity',
          matches:
            '@ViewGroup[clickable=true] - [text^="你对该内容下的评论氛围是否满意"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/60674332-41a3-4a31-907e-7af6c23182bf',
          snapshotUrls: 'https://i.gkd.li/i/20473238',
        },
      ],
      enable: false,
    },
    {
      key: 1,
      name: '全屏广告-关闭广告弹窗',
      desc: '点击 关闭广告按钮 之后出现的广告弹窗',
      activityIds: [
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules:
        '@FrameLayout ImageView + TextView[text*=`虚假广告`][id=`com.zhihu.android:id/tv_content`]',
      enable: true,
    },
    {
      key: 2,
      name: '全屏广告-关闭广告原因',
      desc: '点击 关闭广告按钮 之后出现的选择原因',
      activityIds: 'com.zhihu.android.ContentActivity',
      rules: [
        '[id=`com.zhihu.android:id/confirm_uninterest`]',
        '[id=`com.zhihu.android:id/revert_uninterest`] <n * + [id=`com.zhihu.android:id/reason_container`] > [id=`com.zhihu.android:id/uninterest_reason`]',
      ],
      enable: true,
    },
    {
      key: 3,
      name: '全屏广告-关闭推荐',
      desc: '关闭回答底部其他回答',
      activityIds: 'com.zhihu.android.mix.activity.ContentMixProfileActivity',
      rules: [
        'TextView + View + TextView + TextView[text$=`评论`][text*=`赞同`] + View',
      ],
      enable: true,
    },
    {
      key: 5,
      name: '分段广告-推荐页广告卡片',
      desc: '赚稿费广告卡片,盐选推荐广告,知乎学课堂,汽车广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[id="com.zhihu.android:id/content"] >2 TextView[text="不感兴趣"][id="com.zhihu.android:id/title"]',
        },
        {
          key: 1,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            'TextView[text=`内容质量差`][id=`com.zhihu.android:id/tv_content`]',
        },
        {
          key: 2,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[id=`com.zhihu.android:id/menu`] < FrameLayout - * > TextView[text^=`广告`]',
        },
        {
          key: 3,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[id=null][clickable=true] -n TextView[text*=`广告`][index=0]',
        },
      ],
      enable: true,
    },
    {
      key: 3000,
      name: '分段广告-问题-回答列表-卡片广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.ContentActivity',
          fastQuery: true,
          matches: '@ImageView[clickable=true] -n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849671',
        },
        {
          key: 1,
          activityIds: 'com.zhihu.android.ContentActivity',
          matches:
            'ImageView[id=null] + TextView[text!=null][id=null] + ViewGroup > ImageView[clickable=true]',
        },
        {
          key: 2,
          activityIds: 'com.zhihu.android.ContentActivity',
          fastQuery: true,
          matches: '@ImageView[clickable=true] -3 * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849442',
        },
        {
          key: 90,
          preKeys: [0],
          activityIds: 'com.zhihu.android.ContentActivity',
          fastQuery: true,
          matches: '@[clickable=true] >3 [text="内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13849689',
        },
      ],
      enable: true,
    },
    {
      key: 7,
      name: '局部广告-回答底部评论顶部的任意广告推荐',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@Image + TextView[text$=`的广告`]',
        },
        {
          key: 1,
          matches:
            'TextView[text$=`的广告`] +n TextView[text=`×`][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12864109',
        },
        {
          key: 2,
          activityIds: [
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
          ],
          matches: 'TextView[text="查看详情"] + TextView[text="×"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647617',
            'https://i.gkd.li/import/12647659',
          ],
        },
        {
          key: 3,
          matches: 'TextView[text*=`赞同`][text*=`评论`] + TextView[text=`×`]',
        },
        {
          key: 4,
          matches: 'TextView[text*=`回答`][text*=`关注`] + TextView[text=`×`]',
        },
        {
          key: 6,
          matches: 'TextView[text$=`的广告`] - Image[id=null]',
        },
        {
          key: 8,
          matches: 'TextView[text*=`点赞`][text*=`的回答`] +2 Image[id=null]',
        },
        {
          key: 9,
          matches:
            'TextView[text=""] + Image[text=""] + TextView[text="​"] + Image[id=null][clickable=true]',
        },
        {
          key: 10,
          matches:
            '@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12647525'],
        },
        {
          preKeys: [10],
          key: 100,
          name: '反馈弹窗-点击“不感兴趣”',
          matches:
            '[id="com.zhihu.android:id/recycler_view"] > FrameLayout >(3) [text$="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/import/12647541'],
        },
      ],
      enable: true,
    },
    {
      key: 8,
      name: '全屏广告-关闭首页广告',
      activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
      rules: '[id=`com.zhihu.android:id/tv_ad_close`]',
      enable: true,
    },
    {
      key: 9,
      name: '局部广告-推荐页-顶部广告',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/tv_ad_tag"] + [id="com.zhihu.android:id/img_close_focus"]',
      ],
      enable: true,
    },
    {
      enable: true,
      key: 3001,
      name: '全屏广告-推送通知弹窗',
      desc: '推送通知弹窗-点击x按钮',
      activityIds: 'com.zhihu.android.app.ui.dialog.d',
      rules: [
        'TextView[id="com.zhihu.android:id/guide_title"] - ImageView[id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647583'],
    },
    {
      enable: true,
      key: 11,
      name: '全屏广告-会员页面-月卡红包',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/floating_img"] + ImageView[id="com.zhihu.android:id/floating_close_btn"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647421'],
    },
    {
      key: 3002,
      name: '全屏广告-会员页面-广告弹窗',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12707676'],
      enable: true,
    },
    {
      enable: false,
      key: 101,
      name: '功能类-问题回答-自动展开',
      activityIds:
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12647688',
        'https://i.gkd.li/import/12707687',
      ],
    },
  ],
} as any);
