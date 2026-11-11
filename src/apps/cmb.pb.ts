// 自动生成, 请勿手改（默认启用广告类规则组：开屏/全屏/局部/分段；其余默认关闭；来源见 SOURCES.md）
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 3,
      name: '局部广告-首页活动悬浮广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.mainframe.container.PBMainActivity',
          matches: '[vid="float_window"] > [vid="ivCancle"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14208669',
        },
      ],
      enable: true,
    },
    {
      key: 10,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            '.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[id="cover-img"] + [text="关闭推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/12706022',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.pb.marketing.PopupWindowActivity',
          matches: '[desc^="活动图片"] + [vid="ivCancle"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14208693',
        },
      ],
      enable: true,
    },
    {
      key: 11,
      name: '权限提示-定位权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.app.h5container.webviewcontainer.PBWebContainerActivity',
            '.app.search.PBSearchWebActivity',
            'com.pb.marketing.PopupWindowActivity',
          ],
          matches: '@[desc="关闭"] - * > [text*="开启"][text*="定位"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13248893',
            'https://i.gkd.li/i/13897345',
            'https://i.gkd.li/i/14208717',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 3000,
      name: '全屏广告-朝朝宝弹窗',
      fastQuery: true,
      activityIds: '.app.h5container.webviewcontainer.PBWebContainerActivity',
      rules: '[id="cover-img"] + [text="关闭推荐"]',
      snapshotUrls: 'https://i.gkd.li/import/12706022',
      enable: true,
    },
    {
      key: 3001,
      name: '权限提示-定位提示-请求定位权限弹窗',
      fastQuery: true,
      activityIds: [
        'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        'cmb.pb.app.search.PBSearchWebActivity',
      ],
      rules:
        '@[id="cmb.pb:id/ivDelete"][desc="关闭"] - FrameLayout > [id="cmb.pb:id/tvDescription"][text*="获取您的位置"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12706029',
        'https://i.gkd.li/import/13248893',
        'https://i.gkd.li/import/13897345',
      ],
      enable: false,
    },
  ],
} as any);
